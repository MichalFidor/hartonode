/**
 * HAR to NODE: uility tool for converting a HAR file to a JS functions.
 *
 * @author Michał Fidor <michal.fidor@gmail.com>
 * @license MIT license
 * @copyright Copyright (c) 2019, Michał Fidor
 * @version 1.0.6
 * @preserve
 */
declare function harToNode(har: any): string;
declare function harToNodeToFile(har: any): void;
declare function harToObject(har: any): any;
declare function getHeaders(request: request): string;
declare function matchUrl(url: string, group: number): string;
interface request {
    command?: string;
    method: string;
    cookies: cookies[];
    headers: headers[];
    data: string;
    url: string;
}
interface headers {
    [inputs: string]: string | number;
}
interface cookies {
    [inputs: string]: string | number;
}
export { harToNode, harToNodeToFile, harToObject, getHeaders, matchUrl };
