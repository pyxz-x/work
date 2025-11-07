try:
    import cv2
    import numpy as np
    from typing import Tuple, Optional
    CV2_AVAILABLE = True
except ImportError:
    print("OpenCV未安装，使用PIL作为替代方案")
    from PIL import Image
    import numpy as np
    from typing import Tuple, Optional
    CV2_AVAILABLE = False

def pipei(background_path: str, template_path: str) -> Optional[Tuple[int, int]]:
    """
    使用多种方法尝试找到滑块位置（针对滑块验证优化）
    
    Args:
        background_path: 背景图片路径
        template_path: 滑块模板路径
        
    Returns:
        滑块应该移动到的位置 (x, y)
    """
        
    try:
        # 读取图片
        background = cv2.imread(background_path)
        template = cv2.imread(template_path)
        
        if background is None or template is None:
            raise ValueError("无法加载图片文件")
        
        # 方法1: 直接模板匹配
        bg_gray = cv2.cvtColor(background, cv2.COLOR_BGR2GRAY)
        template_gray = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        
        result = cv2.matchTemplate(bg_gray, template_gray, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        
        if max_val > 0.3:  # 降低阈值
            return (max_loc[0], max_loc[1])
        
        # 方法2: 边缘检测匹配
        bg_edges = cv2.Canny(bg_gray, 50, 150)
        template_edges = cv2.Canny(template_gray, 50, 150)
        
        result_edges = cv2.matchTemplate(bg_edges, template_edges, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result_edges)
        
        if max_val > 0.3:
            return (max_loc[0], max_loc[1])
        
        # 方法3: 多尺度匹配
        scales = [0.8, 0.9, 1.0, 1.1, 1.2]
        best_match = 0
        best_location = None
        
        for scale in scales:
            resized_template = cv2.resize(template_gray, None, fx=scale, fy=scale)
            if resized_template.shape[0] > bg_gray.shape[0] or resized_template.shape[1] > bg_gray.shape[1]:
                continue
                
            result = cv2.matchTemplate(bg_gray, resized_template, cv2.TM_CCOEFF_NORMED)
            min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
            
            if max_val > best_match:
                best_match = max_val
                best_location = (max_loc[0], max_loc[1])
        
        if best_match > 0.25:
            return best_location
            
        return None
        
    except Exception as e:
        print(f"高级匹配错误: {e}")
        return None

def calculate_slide_distance(background_path: str, template_path: str) -> Optional[int]:
    """
    计算滑块需要移动的距离
    
    Args:
        background_path: 背景图片路径
        template_path: 滑块模板路径
        
    Returns:
        需要移动的像素距离，如果找不到则返回 None
    """
    position = pipei(background_path, template_path)
    
    if position is None:
        return None
    
    # 假设滑块从左边开始，返回水平移动距离
    return position[0]-52

if __name__ == "__main__":
    # 测试代码
    background_file = "back.png"
    template_file = "shadow.png"
    
    print("开始滑块验证图片匹配...")
    
    # 模板匹配
    advanced_position = pipei(background_file, template_file)
    if advanced_position:
        print(f"模板匹配找到位置: x={advanced_position[0]}, y={advanced_position[1]}")
    else:
        print("模板匹配未找到匹配位置")
    
    # 计算移动距离
    distance = calculate_slide_distance(background_file, template_file)
    if distance is not None:
        print(f"滑块需要移动距离: {distance}像素")
    else:
        print("无法计算移动距离")