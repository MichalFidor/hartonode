import * as request from 'request';

let apiUrl = 'https://api.os-test.me'

function request0_POST() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "69",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"user":{"email":"brian.bskyb@mailinator.com","password":"Q!w2e3r4"}}';

    const OPTIONS = {
        url: `${apiUrl}/sessions`,
        method: 'POST',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request1_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/notifications?page=0&per_page=10&read=false`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request2_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/users/66/complaints`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request3_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/users/66/complaints`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request4_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/notifications?page=0&per_page=10&read=false`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request5_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints?assigned_to_me=true&requiring_action=true`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request6_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints?assigned_to_me=true&requiring_action=true`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request7_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request8_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request9_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request10_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request11_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request12_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request13_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request14_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/notes?complaint_id=774256&is_alert=true`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request15_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/tasks/guides?parent_guid=774256`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request16_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/notes?complaint_id=774256&is_alert=true`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request17_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/tasks/guides?parent_guid=774256`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request18_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request19_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request20_POST() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "37",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"comment":{"complaint_id":"774256"}}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'POST',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request21_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request22_POST() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "37",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"comment":{"complaint_id":"774256"}}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'POST',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request23_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request24_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request25_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request26_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/remedies`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request27_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request28_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/remedies`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request29_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request30_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/remedies`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request31_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "GET",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/service_types/7/issues`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request32_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/service_types/7/issues`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request33_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "PUT",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request34_PUT() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "95",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":774256,"id":556043,"published":false,"disputed":false,"text":"adsadsasdadsasd"}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043`,
        method: 'PUT',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request35_POST() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "77",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":774256,"comment_id":556043,"text":"asdasdasdasd","type":"17"}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues`,
        method: 'POST',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request36_POST() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "111",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":774256,"comment_id":556043,"text":"adadaadsefwefwewefwef","type":"Goodwill","value":"12312312"}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/remedies`,
        method: 'POST',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request37_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "PUT",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues/231673`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request38_PUT() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "94",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":774256,"comment_id":556043,"id":231673,"text":"asdasdasdasdweewf","type":"17"}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043/issues/231673`,
        method: 'PUT',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request39_PUT() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "95",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":774256,"id":556043,"published":false,"disputed":false,"text":"adsadsasdadsasd"}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043`,
        method: 'PUT',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request40_PUT() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "54",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"complaint_id":"774256","id":556043,"published":true}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments/556043`,
        method: 'PUT',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request41_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request42_OPTIONS() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "*/*",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Access-Control-Request-Method': "PUT",
        'Access-Control-Request-Headers': "authorization,content-type",
        'Referer': "https://www.os-test.me/",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/complete_prepare_case`,
        method: 'OPTIONS',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request43_PUT() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        // 'Content-Length': "69",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const DATA = '{"id":"774256","complaint_commenting":false,"complete_response":true}';

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/complete_prepare_case`,
        method: 'PUT',
        headers: HEADERS,
        body: DATA
    };

    return request(OPTIONS, callback); 
};

function request44_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/service_types/7/issues`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request45_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/tasks/guides?parent_guid=774256`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function request46_GET() {
    const HEADERS = {
        'Host': "api.os-test.me",
        'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0",
        'Accept': "application/json",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Referer': "https://www.os-test.me/",
        'Content-Type': "application/json",
        'Authorization': "eyJhbGciOiJFUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2Niwicm9sZSI6ImNvbXBhbnktdXNlciJ9LCJhdWQiOlsib3NvLXRva2VuIl0sImlhdCI6MTU2MjY1OTY5MX0.1V5Mbp1rbxrs2p-q2tItE0NUXoT2shboMjMjdxhcszFEJyNbjgL80iJz51KYlhKSTLGq3EsqKMHN3X-mcZVgMA",
        'Origin': "https://www.os-test.me",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Cache-Control': "no-cache",
        'TE': "Trailers"
    };

    const OPTIONS = {
        url: `${apiUrl}/complaints/774256/comments`,
        method: 'GET',
        headers: HEADERS
    };

    return request(OPTIONS, callback); 
};

function callback(error: boolean, response: any, body: any) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}


