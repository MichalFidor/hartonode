export interface request {
    command: string;
    method: string;
    cookies: cookies[],
    headers: headers[],
    data: string;
    url: string;
}

export interface headers {
    [inputs:string]: string | number;
}

export interface cookies {
    [inputs:string]: string | number;
}