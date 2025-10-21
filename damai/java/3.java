package mtopsdk.framework.domain;

import androidx.annotation.NonNull;
import java.util.Map;
import mtopsdk.mtop.common.ApiID;
import mtopsdk.mtop.common.MtopListener;
import mtopsdk.mtop.common.MtopNetworkProp;
import mtopsdk.mtop.domain.MtopRequest;
import mtopsdk.mtop.domain.MtopResponse;
import mtopsdk.mtop.domain.ResponseSource;
import mtopsdk.mtop.intf.Mtop;
import mtopsdk.mtop.intf.MtopBuilder;
import mtopsdk.mtop.util.MtopStatistics;
import mtopsdk.network.domain.Request;
import mtopsdk.network.domain.Response;

/* compiled from: Taobao */
/* loaded from: /Users/a1/Desktop/3672fb3fa4c8a83e8eeade7346a2256c/classes12.dex */
public class MtopContext {
    public ApiID apiId;
    public String baseUrl;
    public Class<?> clazz;
    public MtopBuilder mtopBuilder;
    public Mtop mtopInstance;
    public MtopListener mtopListener;
    public MtopRequest mtopRequest;
    public MtopResponse mtopResponse;
    public Request networkRequest;
    public Response networkResponse;
    public MtopNetworkProp property = new MtopNetworkProp();
    public Map<String, String> protocolParams;
    public Map<String, String> queryParams;
    public int requestTotalLength;
    public ResponseSource responseSource;
    public String seqNo;

    @NonNull
    public MtopStatistics stats;
    public boolean supportStreamJson;
    public boolean supportZstdDictionary;
    public boolean upstreamCompress;

    public String getNetRequestHeadersLog() {
        if (this.networkRequest == null) {
            return "";
        }
        return ", headerFields=" + this.networkRequest.headers;
    }
}