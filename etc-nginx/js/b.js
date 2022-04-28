function handleRequest(r) {
    var response = ["Service B", ""]

    response.push("client: " + r.variables.remote_addr);
    response.push("port: " + r.variables.server_port);
    response.push("host: " + r.variables.host);
    response.push("method: " + r.method);
    response.push("uri: " + r.uri);
    response.push("http_version: " + r.httpVersion);
    response.push("bytes_received: " + r.variables.request_length);
    response.push("");
    response.push("Headers:");
    response.push("");

    for (var h in r.headersIn) {
        response.push("" + h + ": " + r.headersIn[h]);
    }

    r.return(200, response.join("\n"));
}

export default {handleRequest};