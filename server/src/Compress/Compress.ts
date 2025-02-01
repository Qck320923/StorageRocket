import pako from "pako";

function u82s(bin: Uint8Array): string {
    let str = "";
    for (let v of bin) str += String.fromCharCode(v + 1);
    return str;
}

function s2u8(str: string): Uint8Array {
    if (str.length < 1) return new Uint8Array();
    let bin = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) bin[i] = str.charCodeAt(i) - 1;
    return bin;
}

export function compress(data: JSONValue, options?: pako.DeflateFunctionOptions): JSONValue {
    const st = Date.now();
    if (["number", "boolean"].includes(typeof data)) return data as number | boolean;
    if (options?.level == -1) return { f: false, data };
    if (typeof data != "string") data = JSON.stringify(data);
    data = u82s(pako.gzip(data, options));
    console.log(`压缩耗时: ${Date.now() - st}ms`);
    return [true, data];
}

export function decompress(data: JSONValue): JSONValue {
    const st = Date.now();
    if (["number", "boolean"].includes(typeof data)) return data as number | boolean;
    if (!(data as [boolean, JSONValue])[0]) return (data as [boolean, JSONValue])[1];
    data = pako.ungzip(s2u8((data as [boolean, string])[1]), { to: "string" });
    try {
        data = JSON.parse(data);
    } catch { };
    console.log(`解压耗时: ${Date.now() - st}ms`);
    return data;
}