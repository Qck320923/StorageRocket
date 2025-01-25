declare type GameLoggerMethod = (...args: any[]) => void;

declare const console: {
  assert: (assertion, ...args: any[]) => void;
  log: GameLoggerMethod;
  debug: GameLoggerMethod;
  error: GameLoggerMethod;
  warn: GameLoggerMethod;
  clear: GameLoggerMethod;
};
/**
 * GameWorld 是整个游戏世界的主要接口，它对应涵盖了控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。
 */
declare const world: GameWorld;
/**
 * GameVoxels 是控制游戏方块的接口，你可以控制地形变化，利用循环语法批量生成/销毁方块，获取某个方块的类型、名称、旋转角度等。
 */
declare const voxels: GameVoxels;
/**
 * GameAssetListEntry 是控制游戏中的资产对象，用于获取游戏内模型、图片、音频等资源。
 */
declare const resources: {
  /**
   * 列出指定类型的游戏资源。
   * @param path - 可选。指定游戏资源的类型。如果不提供，默认返回全部资源（包含脚本）。
   *        - 'snow': 查询雪贴图资源。
   *        - 'mesh': 查询体素模型资源。
   *        - 'picture': 查询图片资源。
   *        - 'audio': 查询音频资源。
   *        - 'lut': 查询滤镜资源。
   * @returns 返回一个 GameAssetListEntry 对象数组，每个对象代表一个游戏资源条目。
   */
  ls: (
    path?: "snow" | "mesh" | "picture" | "audio" | "lut"
  ) => GameAssetListEntry[];
};
/**
 * 旧代编辑器使用的数据库接口，已弃用，请在使用GameDataStorage，如：
 * ```
 * const sa = storage.getGroupStorage('boxGame');
 * sa.get('box');
 * ```
 * @deprecated
 */
declare const db: GameDatabase;
/**
 * GameDataStorage 代表数据存储空间的类，能控制单地图或组地图数据库，能够以键值对的形式存储数据，提供方法处理空间内键值对相关的操作。
 */
declare const storage: GameStorage;
/**
 * GameHttpAPI 是可以链接外部网站数据的对象，用于对接第三方平台接口的操作。
 */
declare const http: GameHttpAPI;
/**
 * GameRTC 是实时通讯技术，用于与其他游戏玩家语音交流的操作。
 */
declare const rtc: GameRTC;
/**
 * 较老版本的GUI接口，已不推荐使用，请在客户端使用GameUI，如：
 * ```
 * const box = ui.findChildByName('box');
 * box.zIndex=2;
 * ```
 * @deprecated
 */
declare const gui: GameGUI;
/**
 * ServerRemoteChannel 是管理客户端与服务端通讯的对象，用于对跨端传递信息的操作。
 */
declare const remoteChannel: ServerRemoteChannel;

/**
 * sleep是一种函数，作用是延时，程序暂停若干时间，在执行时要抛出一个中断异常，必须对其进行捕获并处理才可以使用这个函数。
 * @param ms 延迟时间，单位为毫秒。
 */
declare function sleep(ms: number): Promise<void>;

/**
 * 用于加载模块，返回模块对象。
 */
declare const require: {
  /**
   * 加载模块，返回模块对象。
   * @param module 模块名称。
   */
  (module: string): any;
  /**
   *
   * @param path 路径
   * @returns
   */
  resolve: (path: string) => string;
};
/**
 * 用于导出模块，返回模块对象。
 */
declare const module: {
  /**
   * 导出模块，返回模块对象。
   */
  exports: any;
};
/**
 * 用于导出模块，返回模块对象。
 */
declare const exports: any;
/**
 * __dirname 是一个只读的属性，返回当前模块的目录名。
 */
declare const __dirname: string;
/**
 * __filename 是一个只读的属性，返回当前模块的文件名。
 */
declare const __filename: string;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}

interface MapConstructor {
  new (): Map<any, any>;
  new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly size: number;
}

interface WeakMap<K extends object, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

interface WeakMapConstructor {
  new <K extends object = object, V = any>(
    entries?: readonly [K, V][] | null
  ): WeakMap<K, V>;
  readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;

interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  readonly size: number;
}

interface SetConstructor {
  new <T = any>(values?: readonly T[] | null): Set<T>;
  readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
  forEach(
    callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  readonly size: number;
}

interface WeakSet<T extends object> {
  add(value: T): this;
  delete(value: T): boolean;
  has(value: T): boolean;
}

interface WeakSetConstructor {
  new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
  readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): number;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: T, start?: number, end?: number): this;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
}

interface ArrayConstructor {
  /**
   * Creates an array from an array-like object.
   * @param arrayLike An array-like object to convert to an array.
   */
  from<T>(arrayLike: ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param arrayLike An array-like object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any
  ): U[];

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of<T>(...items: T[]): T[];
}

interface DateConstructor {
  new (value: number | string | Date): Date;
}

interface Function {
  /**
   * Returns the name of the function. Function names are read-only and can not be changed.
   */
  readonly name: string;
}

interface Math {
  /**
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  clz32(x: number): number;

  /**
   * Returns the result of 32-bit multiplication of two numbers.
   * @param x First number
   * @param y Second number
   */
  imul(x: number, y: number): number;

  /**
   * Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x The numeric expression to test
   */
  sign(x: number): number;

  /**
   * Returns the base 10 logarithm of a number.
   * @param x A numeric expression.
   */
  log10(x: number): number;

  /**
   * Returns the base 2 logarithm of a number.
   * @param x A numeric expression.
   */
  log2(x: number): number;

  /**
   * Returns the natural logarithm of 1 + x.
   * @param x A numeric expression.
   */
  log1p(x: number): number;

  /**
   * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
   * subtracting 1 from the exponential function of x (e raised to the power of x, where e
   * is the base of the natural logarithms).
   * @param x A numeric expression.
   */
  expm1(x: number): number;

  /**
   * Returns the hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  cosh(x: number): number;

  /**
   * Returns the hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  sinh(x: number): number;

  /**
   * Returns the hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  tanh(x: number): number;

  /**
   * Returns the inverse hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  acosh(x: number): number;

  /**
   * Returns the inverse hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  asinh(x: number): number;

  /**
   * Returns the inverse hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  atanh(x: number): number;

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param values Values to compute the square root for.
   *     If no arguments are passed, the result is +0.
   *     If there is only one argument, the result is the absolute value.
   *     If any argument is +Infinity or -Infinity, the result is +Infinity.
   *     If any argument is NaN, the result is NaN.
   *     If all arguments are either +0 or −0, the result is +0.
   */
  hypot(...values: number[]): number;

  /**
   * Returns the integral part of the a numeric expression, x, removing any fractional digits.
   * If x is already an integer, the result is x.
   * @param x A numeric expression.
   */
  trunc(x: number): number;

  /**
   * Returns the nearest single precision float representation of a number.
   * @param x A numeric expression.
   */
  fround(x: number): number;

  /**
   * Returns an implementation-dependent approximation to the cube root of number.
   * @param x A numeric expression.
   */
  cbrt(x: number): number;
}

interface NumberConstructor {
  /**
   * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
   * that is representable as a Number value, which is approximately:
   * 2.2204460492503130808472633361816 x 10‍−‍16.
   */
  readonly EPSILON: number;

  /**
   * Returns true if passed value is finite.
   * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
   * number. Only finite values of the type number, result in true.
   * @param number A numeric value.
   */
  isFinite(number: number): boolean;

  /**
   * Returns true if the value passed is an integer, false otherwise.
   * @param number A numeric value.
   */
  isInteger(number: number): boolean;

  /**
   * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
   * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
   * to a number. Only values of the type number, that are also NaN, result in true.
   * @param number A numeric value.
   */
  isNaN(number: number): boolean;

  /**
   * Returns true if the value passed is a safe integer.
   * @param number A numeric value.
   */
  isSafeInteger(number: number): boolean;

  /**
   * The value of the largest integer n such that n and n + 1 are both exactly representable as
   * a Number value.
   * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
   */
  readonly MAX_SAFE_INTEGER: number;

  /**
   * The value of the smallest integer n such that n and n − 1 are both exactly representable as
   * a Number value.
   * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
   */
  readonly MIN_SAFE_INTEGER: number;

  /**
   * Converts a string to a floating-point number.
   * @param string A string that contains a floating-point number.
   */
  parseFloat(string: string): number;

  /**
   * Converts A string to an integer.
   * @param s A string to convert into a number.
   * @param radix A value between 2 and 36 that specifies the base of the number in numString.
   * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
   * All other strings are considered decimal.
   */
  parseInt(string: string, radix?: number): number;
}

interface ObjectConstructor {
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @param source3 The third source object from which to copy properties.
   */
  assign<T, U, V, W>(
    target: T,
    source1: U,
    source2: V,
    source3: W
  ): T & U & V & W;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties
   */
  assign(target: object, ...sources: any[]): any;

  /**
   * Returns an array of all symbol properties found directly on object o.
   * @param o Object to retrieve the symbols from.
   */
  getOwnPropertySymbols(o: any): symbol[];

  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: {}): string[];

  /**
   * Returns true if the values are the same value, false otherwise.
   * @param value1 The first value.
   * @param value2 The second value.
   */
  is(value1: any, value2: any): boolean;

  /**
   * Sets the prototype of a specified object o to object proto or null. Returns the object o.
   * @param o The object to change its prototype.
   * @param proto The value of the new prototype or null.
   */
  setPrototypeOf(o: any, proto: object | null): any;
}

interface ReadonlyArray<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: readonly T[]
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
    thisArg?: any
  ): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
    thisArg?: any
  ): number;
}

interface RegExp {
  /**
   * Returns a string indicating the flags of the regular expression in question. This field is read-only.
   * The characters in this string are sequenced and concatenated in the following order:
   *
   *    - "g" for global
   *    - "i" for ignoreCase
   *    - "m" for multiline
   *    - "u" for unicode
   *    - "y" for sticky
   *
   * If no flags are set, the value is the empty string.
   */
  readonly flags: string;

  /**
   * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
   * expression. Default is false. Read-only.
   */
  readonly sticky: boolean;

  /**
   * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
   * expression. Default is false. Read-only.
   */
  readonly unicode: boolean;
}

interface RegExpConstructor {
  new (pattern: RegExp | string, flags?: string): RegExp;
  (pattern: RegExp | string, flags?: string): RegExp;
}

interface String {
  /**
   * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
   * value of the UTF-16 encoded code point starting at the string element at position pos in
   * the String resulting from converting this object to a String.
   * If there is no element at that position, the result is undefined.
   * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
   */
  codePointAt(pos: number): number | undefined;

  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param searchString search string
   * @param position If position is undefined, 0 is assumed, so as to search all of the String.
   */
  includes(searchString: string, position?: number): boolean;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  endsWith(searchString: string, endPosition?: number): boolean;

  /**
   * Returns the String value result of normalizing the string into the normalization form
   * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
   * is "NFC"
   */
  normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;

  /**
   * Returns the String value result of normalizing the string into the normalization form
   * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
   * is "NFC"
   */
  normalize(form?: string): string;

  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param count number of copies to append
   */
  repeat(count: number): string;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  startsWith(searchString: string, position?: number): boolean;

  /**
   * Returns an <a> HTML anchor element and sets the name attribute to the text value
   * @param name
   */
  anchor(name: string): string;

  /** Returns a <big> HTML element */
  big(): string;

  /** Returns a <blink> HTML element */
  blink(): string;

  /** Returns a <b> HTML element */
  bold(): string;

  /** Returns a <tt> HTML element */
  fixed(): string;

  /** Returns a <font> HTML element and sets the color attribute value */
  fontcolor(color: string): string;

  /** Returns a <font> HTML element and sets the size attribute value */
  fontsize(size: number): string;

  /** Returns a <font> HTML element and sets the size attribute value */
  fontsize(size: string): string;

  /** Returns an <i> HTML element */
  italics(): string;

  /** Returns an <a> HTML element and sets the href attribute value */
  link(url: string): string;

  /** Returns a <small> HTML element */
  small(): string;

  /** Returns a <strike> HTML element */
  strike(): string;

  /** Returns a <sub> HTML element */
  sub(): string;

  /** Returns a <sup> HTML element */
  sup(): string;
}

interface StringConstructor {
  /**
   * Return the String value whose elements are, in order, the elements in the List elements.
   * If length is 0, the empty string is returned.
   */
  fromCodePoint(...codePoints: number[]): string;

  /**
   * String.raw is intended for use as a tag function of a Tagged Template String. When called
   * as such the first argument will be a well formed template call site object and the rest
   * parameter will contain the substitution values.
   * @param template A well-formed template string call site representation.
   * @param substitutions A set of substitution values.
   */
  raw(template: TemplateStringsArray, ...substitutions: any[]): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Generator<T = unknown, TReturn = any, TNext = unknown>
  extends Iterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return(value: TReturn): IteratorResult<T, TReturn>;
  throw(e: any): IteratorResult<T, TReturn>;
  [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

interface GeneratorFunction {
  /**
   * Creates a new Generator object.
   * @param args A list of arguments the function accepts.
   */
  new (...args: any[]): Generator;
  /**
   * Creates a new Generator object.
   * @param args A list of arguments the function accepts.
   */
  (...args: any[]): Generator;
  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: Generator;
}

interface GeneratorFunctionConstructor {
  /**
   * Creates a new Generator function.
   * @param args A list of arguments the function accepts.
   */
  new (...args: string[]): GeneratorFunction;
  /**
   * Creates a new Generator function.
   * @param args A list of arguments the function accepts.
   */
  (...args: string[]): GeneratorFunction;
  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: GeneratorFunction;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that returns the default iterator for an object. Called by the semantics of the
   * for-of statement.
   */
  readonly iterator: symbol;
}

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

type IteratorResult<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

interface Array<T> {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an iterable of values in the array
   */
  values(): IterableIterator<T>;
}

interface ArrayConstructor {
  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   */
  from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(
    iterable: Iterable<T> | ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any
  ): U[];
}

interface ReadonlyArray<T> {
  /** Iterator of values in the array. */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an iterable of values in the array
   */
  values(): IterableIterator<T>;
}

interface IArguments {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<any>;
}

interface Map<K, V> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}

interface ReadonlyMap<K, V> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}

interface MapConstructor {
  new <K, V>(iterable: Iterable<readonly [K, V]>): Map<K, V>;
}

interface WeakMap<K extends object, V> {}

interface WeakMapConstructor {
  new <K extends object, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
}

interface Set<T> {
  /** Iterates over values in the set. */
  [Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
  /** Iterates over values in the set. */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface SetConstructor {
  new <T>(iterable?: Iterable<T> | null): Set<T>;
}

interface WeakSet<T extends object> {}

interface WeakSetConstructor {
  new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}

interface Promise<T> {}

interface PromiseConstructor {
  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<TAll[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
}

declare namespace Reflect {
  function enumerate(target: object): IterableIterator<any>;
}

interface String {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<string>;
}

interface Int8Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int8ArrayConstructor {
  new (elements: Iterable<number>): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int8Array;
}

interface Uint8Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ArrayConstructor {
  new (elements: Iterable<number>): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint8Array;
}

interface Uint8ClampedArray {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ClampedArrayConstructor {
  new (elements: Iterable<number>): Uint8ClampedArray;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint8ClampedArray;
}

interface Int16Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int16ArrayConstructor {
  new (elements: Iterable<number>): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int16Array;
}

interface Uint16Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint16ArrayConstructor {
  new (elements: Iterable<number>): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint16Array;
}

interface Int32Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int32ArrayConstructor {
  new (elements: Iterable<number>): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int32Array;
}

interface Uint32Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint32ArrayConstructor {
  new (elements: Iterable<number>): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint32Array;
}

interface Float32Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float32ArrayConstructor {
  new (elements: Iterable<number>): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Float32Array;
}

interface Float64Array {
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float64ArrayConstructor {
  new (elements: Iterable<number>): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Float64Array;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface PromiseConstructor {
  /**
   * A reference to the prototype.
   */
  readonly prototype: Promise<any>;

  /**
   * Creates a new Promise.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new <T>(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>,
      T10 | PromiseLike<T10>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>
    ]
  ): Promise<[T1, T2, T3, T4, T5]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>
    ]
  ): Promise<[T1, T2, T3, T4]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>
    ]
  ): Promise<[T1, T2, T3]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2>(
    values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]
  ): Promise<[T1, T2]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(
    values: readonly T[]
  ): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An iterable of Promises.
   * @returns A new Promise.
   */
  race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject<T = never>(reason?: any): Promise<T>;

  /**
   * Creates a new resolved promise for the provided value.
   * @param value A promise.
   * @returns A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T>): Promise<T>;

  /**
   * Creates a new resolved promise .
   * @returns A resolved promise.
   */
  resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ProxyHandler<T extends object> {
  getPrototypeOf?(target: T): object | null;
  setPrototypeOf?(target: T, v: any): boolean;
  isExtensible?(target: T): boolean;
  preventExtensions?(target: T): boolean;
  getOwnPropertyDescriptor?(
    target: T,
    p: PropertyKey
  ): PropertyDescriptor | undefined;
  has?(target: T, p: PropertyKey): boolean;
  get?(target: T, p: PropertyKey, receiver: any): any;
  set?(target: T, p: PropertyKey, value: any, receiver: any): boolean;
  deleteProperty?(target: T, p: PropertyKey): boolean;
  defineProperty?(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  enumerate?(target: T): PropertyKey[];
  ownKeys?(target: T): PropertyKey[];
  apply?(target: T, thisArg: any, argArray?: any): any;
  construct?(target: T, argArray: any, newTarget?: any): object;
}

interface ProxyConstructor {
  revocable<T extends object>(
    target: T,
    handler: ProxyHandler<T>
  ): { proxy: T; revoke: () => void };
  new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Reflect {
  function apply(
    target: Function,
    thisArgument: any,
    argumentsList: ArrayLike<any>
  ): any;
  function construct(
    target: Function,
    argumentsList: ArrayLike<any>,
    newTarget?: any
  ): any;
  function defineProperty(
    target: object,
    propertyKey: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
  function get(target: object, propertyKey: PropertyKey, receiver?: any): any;
  function getOwnPropertyDescriptor(
    target: object,
    propertyKey: PropertyKey
  ): PropertyDescriptor | undefined;
  function getPrototypeOf(target: object): object;
  function has(target: object, propertyKey: PropertyKey): boolean;
  function isExtensible(target: object): boolean;
  function ownKeys(target: object): PropertyKey[];
  function preventExtensions(target: object): boolean;
  function set(
    target: object,
    propertyKey: PropertyKey,
    value: any,
    receiver?: any
  ): boolean;
  function setPrototypeOf(target: object, proto: any): boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A reference to the prototype.
   */
  readonly prototype: Symbol;

  /**
   * Returns a new unique Symbol value.
   * @param  description Description of the new Symbol object.
   */
  (description?: string | number): symbol;

  /**
   * Returns a Symbol object from the global symbol registry matching the given key if found.
   * Otherwise, returns a new symbol with this key.
   * @param key key to search for.
   */
  for(key: string): symbol;

  /**
   * Returns a key from the global symbol registry matching the given Symbol if found.
   * Otherwise, returns a undefined.
   * @param sym Symbol to find the key for.
   */
  keyFor(sym: symbol): string | undefined;
}

declare var Symbol: SymbolConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that determines if a constructor object recognizes an object as one of the
   * constructor’s instances. Called by the semantics of the instanceof operator.
   */
  readonly hasInstance: symbol;

  /**
   * A Boolean value that if true indicates that an object should flatten to its array elements
   * by Array.prototype.concat.
   */
  readonly isConcatSpreadable: symbol;

  /**
   * A regular expression method that matches the regular expression against a string. Called
   * by the String.prototype.match method.
   */
  readonly match: symbol;

  /**
   * A regular expression method that replaces matched substrings of a string. Called by the
   * String.prototype.replace method.
   */
  readonly replace: symbol;

  /**
   * A regular expression method that returns the index within a string that matches the
   * regular expression. Called by the String.prototype.search method.
   */
  readonly search: symbol;

  /**
   * A function valued property that is the constructor function that is used to create
   * derived objects.
   */
  readonly species: symbol;

  /**
   * A regular expression method that splits a string at the indices that match the regular
   * expression. Called by the String.prototype.split method.
   */
  readonly split: symbol;

  /**
   * A method that converts an object to a corresponding primitive value.
   * Called by the ToPrimitive abstract operation.
   */
  readonly toPrimitive: symbol;

  /**
   * A String value that is used in the creation of the default string description of an object.
   * Called by the built-in method Object.prototype.toString.
   */
  readonly toStringTag: symbol;

  /**
   * An Object whose own property names are property names that are excluded from the 'with'
   * environment bindings of the associated objects.
   */
  readonly unscopables: symbol;
}

interface Symbol {
  readonly [Symbol.toStringTag]: string;
}

interface Array<T> {
  /**
   * Returns an object whose properties have the value 'true'
   * when they will be absent when used in a 'with' statement.
   */
  [Symbol.unscopables](): {
    copyWithin: boolean;
    entries: boolean;
    fill: boolean;
    find: boolean;
    findIndex: boolean;
    keys: boolean;
    values: boolean;
  };
}

interface Date {
  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "default"): string;
  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "string"): string;
  /**
   * Converts a Date object to a number.
   */
  [Symbol.toPrimitive](hint: "number"): number;
  /**
   * Converts a Date object to a string or number.
   *
   * @param hint The strings "number", "string", or "default" to specify what primitive to return.
   *
   * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
   * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
   */
  [Symbol.toPrimitive](hint: string): string | number;
}

interface Map<K, V> {
  readonly [Symbol.toStringTag]: string;
}

interface WeakMap<K extends object, V> {
  readonly [Symbol.toStringTag]: string;
}

interface Set<T> {
  readonly [Symbol.toStringTag]: string;
}

interface WeakSet<T extends object> {
  readonly [Symbol.toStringTag]: string;
}

interface JSON {
  readonly [Symbol.toStringTag]: string;
}

interface Function {
  /**
   * Determines whether the given value inherits from this function if this function was used
   * as a constructor function.
   *
   * A constructor function can control which objects are recognized as its instances by
   * 'instanceof' by overriding this method.
   */
  [Symbol.hasInstance](value: any): boolean;
}

interface GeneratorFunction {
  readonly [Symbol.toStringTag]: string;
}

interface Math {
  readonly [Symbol.toStringTag]: string;
}

interface Promise<T> {
  readonly [Symbol.toStringTag]: string;
}

interface PromiseConstructor {
  readonly [Symbol.species]: PromiseConstructor;
}

interface RegExp {
  /**
   * Matches a string with this regular expression, and returns an array containing the results of
   * that search.
   * @param string A string to search within.
   */
  [Symbol.match](string: string): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using this regular expression.
   * @param string A String object or string literal whose contents matching against
   *               this regular expression will be replaced
   * @param replaceValue A String object or string literal containing the text to replace for every
   *                     successful match of this regular expression.
   */
  [Symbol.replace](string: string, replaceValue: string): string;

  /**
   * Replaces text in a string, using this regular expression.
   * @param string A String object or string literal whose contents matching against
   *               this regular expression will be replaced
   * @param replacer A function that returns the replacement text.
   */
  [Symbol.replace](
    string: string,
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * Finds the position beginning first substring match in a regular expression search
   * using this regular expression.
   *
   * @param string The string to search within.
   */
  [Symbol.search](string: string): number;

  /**
   * Returns an array of substrings that were delimited by strings in the original input that
   * match against this regular expression.
   *
   * If the regular expression contains capturing parentheses, then each time this
   * regular expression matches, the results (including any undefined results) of the
   * capturing parentheses are spliced.
   *
   * @param string string value to split
   * @param limit if not undefined, the output array is truncated so that it contains no more
   * than 'limit' elements.
   */
  [Symbol.split](string: string, limit?: number): string[];
}

interface RegExpConstructor {
  readonly [Symbol.species]: RegExpConstructor;
}

interface String {
  /**
   * Matches a string an object that supports being matched against, and returns an array containing the results of that search.
   * @param matcher An object that supports being matched against.
   */
  match(matcher: {
    [Symbol.match](string: string): RegExpMatchArray | null;
  }): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue A object can search for and replace matches within a string.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(
    searchValue: {
      [Symbol.replace](string: string, replaceValue: string): string;
    },
    replaceValue: string
  ): string;

  /**
   * Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue A object can search for and replace matches within a string.
   * @param replacer A function that returns the replacement text.
   */
  replace(
    searchValue: {
      [Symbol.replace](
        string: string,
        replacer: (substring: string, ...args: any[]) => string
      ): string;
    },
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * Finds the first substring match in a regular expression search.
   * @param searcher An object which supports searching within a string.
   */
  search(searcher: { [Symbol.search](string: string): number }): number;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param splitter An object that can split a string.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(
    splitter: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number
  ): string[];
}

interface ArrayBuffer {
  readonly [Symbol.toStringTag]: string;
}

interface DataView {
  readonly [Symbol.toStringTag]: string;
}

interface Int8Array {
  readonly [Symbol.toStringTag]: "Int8Array";
}

interface Uint8Array {
  readonly [Symbol.toStringTag]: "UInt8Array";
}

interface Uint8ClampedArray {
  readonly [Symbol.toStringTag]: "Uint8ClampedArray";
}

interface Int16Array {
  readonly [Symbol.toStringTag]: "Int16Array";
}

interface Uint16Array {
  readonly [Symbol.toStringTag]: "Uint16Array";
}

interface Int32Array {
  readonly [Symbol.toStringTag]: "Int32Array";
}

interface Uint32Array {
  readonly [Symbol.toStringTag]: "Uint32Array";
}

interface Float32Array {
  readonly [Symbol.toStringTag]: "Float32Array";
}

interface Float64Array {
  readonly [Symbol.toStringTag]: "Float64Array";
}

interface ArrayConstructor {
  readonly [Symbol.species]: ArrayConstructor;
}
interface MapConstructor {
  readonly [Symbol.species]: MapConstructor;
}
interface SetConstructor {
  readonly [Symbol.species]: SetConstructor;
}
interface ArrayBufferConstructor {
  readonly [Symbol.species]: ArrayBufferConstructor;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface ReadonlyArray<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface Int8Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8ClampedArray {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int16Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint16Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float64Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  type DateTimeFormatPartTypes =
    | "day"
    | "dayPeriod"
    | "era"
    | "hour"
    | "literal"
    | "minute"
    | "month"
    | "second"
    | "timeZoneName"
    | "weekday"
    | "year";

  interface DateTimeFormatPart {
    type: DateTimeFormatPartTypes;
    value: string;
  }

  interface DateTimeFormat {
    formatToParts(date?: Date | number): DateTimeFormatPart[];
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values(o: {}): any[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries(o: {}): [string, any][];

  /**
   * Returns an object containing all own property descriptors of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  getOwnPropertyDescriptors<T>(o: T): {
    [P in keyof T]: TypedPropertyDescriptor<T[P]>;
  } & {
    [x: string]: PropertyDescriptor;
  };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SharedArrayBuffer {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /*
   * The SharedArrayBuffer constructor's length property whose value is 1.
   */
  length: number;
  /**
   * Returns a section of an SharedArrayBuffer.
   */
  slice(begin: number, end?: number): SharedArrayBuffer;
  readonly [Symbol.species]: SharedArrayBuffer;
  readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}

interface SharedArrayBufferConstructor {
  readonly prototype: SharedArrayBuffer;
  new (byteLength: number): SharedArrayBuffer;
}
declare var SharedArrayBuffer: SharedArrayBufferConstructor;

interface ArrayBufferTypes {
  SharedArrayBuffer: SharedArrayBuffer;
}

interface Atomics {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    expectedValue: number,
    replacementValue: number
  ): number;

  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * Returns a value indicating whether high-performance algorithms can use atomic operations
   * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
   * array.
   */
  isLockFree(size: number): boolean;

  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number
  ): number;

  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
   * `"not-equal"`.
   */
  wait(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number
  ): "ok" | "not-equal" | "timed-out";

  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   */
  notify(typedArray: Int32Array, index: number, count: number): number;

  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  readonly [Symbol.toStringTag]: "Atomics";
}

declare var Atomics: Atomics;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padStart(maxLength: number, fillString?: string): string;

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padEnd(maxLength: number, fillString?: string): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Int8ArrayConstructor {
  new (): Int8Array;
}

interface Uint8ArrayConstructor {
  new (): Uint8Array;
}

interface Uint8ClampedArrayConstructor {
  new (): Uint8ClampedArray;
}

interface Int16ArrayConstructor {
  new (): Int16Array;
}

interface Uint16ArrayConstructor {
  new (): Uint16Array;
}

interface Int32ArrayConstructor {
  new (): Int32Array;
}

interface Uint32ArrayConstructor {
  new (): Uint32Array;
}

interface Float32ArrayConstructor {
  new (): Float32Array;
}

interface Float64ArrayConstructor {
  new (): Float64Array;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface AsyncGenerator<T = unknown, TReturn = any, TNext = unknown>
  extends AsyncIterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
  return(
    value: TReturn | PromiseLike<TReturn>
  ): Promise<IteratorResult<T, TReturn>>;
  throw(e: any): Promise<IteratorResult<T, TReturn>>;
  [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
}

interface AsyncGeneratorFunction {
  /**
   * Creates a new AsyncGenerator object.
   * @param args A list of arguments the function accepts.
   */
  new (...args: any[]): AsyncGenerator;
  /**
   * Creates a new AsyncGenerator object.
   * @param args A list of arguments the function accepts.
   */
  (...args: any[]): AsyncGenerator;
  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: AsyncGenerator;
}

interface AsyncGeneratorFunctionConstructor {
  /**
   * Creates a new AsyncGenerator function.
   * @param args A list of arguments the function accepts.
   */
  new (...args: string[]): AsyncGeneratorFunction;
  /**
   * Creates a new AsyncGenerator function.
   * @param args A list of arguments the function accepts.
   */
  (...args: string[]): AsyncGeneratorFunction;
  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: AsyncGeneratorFunction;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that returns the default async iterator for an object. Called by the semantics of
   * the for-await-of statement.
   */
  readonly asyncIterator: symbol;
}

interface AsyncIterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
  return?(
    value?: TReturn | PromiseLike<TReturn>
  ): Promise<IteratorResult<T, TReturn>>;
  throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncIterable<T> {
  [Symbol.asyncIterator](): AsyncIterator<T>;
}

interface AsyncIterableIterator<T> extends AsyncIterator<T> {
  [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  interface PluralRulesOptions {
    localeMatcher?: "lookup" | "best fit";
    type?: "cardinal" | "ordinal";
  }

  interface ResolvedPluralRulesOptions {
    locale: string;
    pluralCategories: string[];
    type: "cardinal" | "ordinal";
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits: number;
    maximumSignificantDigits: number;
  }

  interface PluralRules {
    resolvedOptions(): ResolvedPluralRulesOptions;
    select(n: number): string;
  }

  const PluralRules: {
    new (
      locales?: string | string[],
      options?: PluralRulesOptions
    ): PluralRules;
    (locales?: string | string[], options?: PluralRulesOptions): PluralRules;
    supportedLocalesOf(
      locales: string | string[],
      options?: PluralRulesOptions
    ): string[];
  };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface RegExpMatchArray {
  groups?: {
    [key: string]: string;
  };
}

interface RegExpExecArray {
  groups?: {
    [key: string]: string;
  };
}

interface RegExp {
  /**
   * Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.
   * Default is false. Read-only.
   */
  readonly dotAll: boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ReadonlyArray<T> {
  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index: number,
      array: T[]
    ) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][][][]>
      | ReadonlyArray<ReadonlyArray<U[][][]>>
      | ReadonlyArray<ReadonlyArray<U[][]>[]>
      | ReadonlyArray<ReadonlyArray<U[]>[][]>
      | ReadonlyArray<ReadonlyArray<U>[][][]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[][]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[][]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[][]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>[]>
      | ReadonlyArray<
          ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>
        >,
    depth: 4
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][][]>
      | ReadonlyArray<ReadonlyArray<U>[][]>
      | ReadonlyArray<ReadonlyArray<U[]>[]>
      | ReadonlyArray<ReadonlyArray<U[][]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>,
    depth: 3
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][]>
      | ReadonlyArray<ReadonlyArray<U[]>>
      | ReadonlyArray<ReadonlyArray<U>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>,
    depth: 2
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(
    this: ReadonlyArray<U[]> | ReadonlyArray<ReadonlyArray<U>>,
    depth?: 1
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: ReadonlyArray<U>, depth: 0): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(depth?: number): any[];
}

interface Array<T> {
  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index: number,
      array: T[]
    ) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][][][], depth: 7): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][][], depth: 6): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][], depth: 5): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][], depth: 4): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][], depth: 3): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][], depth: 2): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][], depth?: 1): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[], depth: 0): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(depth?: number): any[];
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * Returns an object created by key-value entries for properties and methods
   * @param entries An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries<T = any>(
    entries: Iterable<readonly [PropertyKey, T]>
  ): { [k in PropertyKey]: T };

  /**
   * Returns an object created by key-value entries for properties and methods
   * @param entries An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries(entries: Iterable<readonly any[]>): any;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /** Removes the trailing white space and line terminator characters from a string. */
  trimEnd(): string;

  /** Removes the leading white space and line terminator characters from a string. */
  trimStart(): string;

  /** Removes the leading white space and line terminator characters from a string. */
  trimLeft(): string;

  /** Removes the trailing white space and line terminator characters from a string. */
  trimRight(): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Symbol {
  /**
   * Expose the [[Description]] internal slot of a symbol directly.
   */
  readonly description: string | undefined;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface BigInt {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings.
   */
  toString(radix?: number): string;

  /** Returns a string representation appropriate to the host environment's current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): bigint;

  readonly [Symbol.toStringTag]: "BigInt";
}

interface BigIntConstructor {
  (value?: any): bigint;
  readonly prototype: BigInt;

  /**
   * Interprets the low bits of a BigInt as a 2's-complement signed integer.
   * All higher bits are discarded.
   * @param bits The number of low bits to use
   * @param int The BigInt whose bits to extract
   */
  asIntN(bits: number, int: bigint): bigint;
  /**
   * Interprets the low bits of a BigInt as an unsigned integer.
   * All higher bits are discarded.
   * @param bits The number of low bits to use
   * @param int The BigInt whose bits to extract
   */
  asUintN(bits: number, int: bigint): bigint;
}

declare var BigInt: BigIntConstructor;

/**
 * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigInt64Array {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;

  /** The length in bytes of the array. */
  readonly byteLength: number;

  /** The offset in bytes of the array. */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any
  ): BigInt64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): bigint | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any
  ): void;

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /** Yields each index in the array. */
  keys(): IterableIterator<number>;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /** The length of the array. */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any
  ): BigInt64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => bigint
  ): bigint;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => bigint
  ): bigint;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => U,
    initialValue: U
  ): U;

  /** Reverses the elements in the array. */
  reverse(): this;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;

  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;

  /** Returns a string representation of the array. */
  toString(): string;

  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;

  [Symbol.iterator](): IterableIterator<bigint>;

  readonly [Symbol.toStringTag]: "BigInt64Array";

  [index: number]: bigint;
}

interface BigInt64ArrayConstructor {
  readonly prototype: BigInt64Array;
  new (length?: number): BigInt64Array;
  new (array: Iterable<bigint>): BigInt64Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    length?: number
  ): BigInt64Array;

  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigInt64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigInt64Array;
  from<U>(
    arrayLike: ArrayLike<U>,
    mapfn: (v: U, k: number) => bigint,
    thisArg?: any
  ): BigInt64Array;
}

declare var BigInt64Array: BigInt64ArrayConstructor;

/**
 * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigUint64Array {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;

  /** The length in bytes of the array. */
  readonly byteLength: number;

  /** The offset in bytes of the array. */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (
      value: bigint,
      index: number,
      array: BigUint64Array
    ) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any
  ): BigUint64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any
  ): bigint | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any
  ): void;

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /** Yields each index in the array. */
  keys(): IterableIterator<number>;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /** The length of the array. */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any
  ): BigUint64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => bigint
  ): bigint;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => bigint
  ): bigint;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => U,
    initialValue: U
  ): U;

  /** Reverses the elements in the array. */
  reverse(): this;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (
      value: bigint,
      index: number,
      array: BigUint64Array
    ) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;

  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;

  /** Returns a string representation of the array. */
  toString(): string;

  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;

  [Symbol.iterator](): IterableIterator<bigint>;

  readonly [Symbol.toStringTag]: "BigUint64Array";

  [index: number]: bigint;
}

interface BigUint64ArrayConstructor {
  readonly prototype: BigUint64Array;
  new (length?: number): BigUint64Array;
  new (array: Iterable<bigint>): BigUint64Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    length?: number
  ): BigUint64Array;

  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigUint64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigUint64Array;
  from<U>(
    arrayLike: ArrayLike<U>,
    mapfn: (v: U, k: number) => bigint,
    thisArg?: any
  ): BigUint64Array;
}

declare var BigUint64Array: BigUint64ArrayConstructor;

interface DataView {
  /**
   * Gets the BigInt64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * Gets the BigUint64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * Stores a BigInt64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;

  /**
   * Stores a BigUint64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface PromiseFulfilledResult<T> {
  status: "fulfilled";
  value: T;
}

interface PromiseRejectedResult {
  status: "rejected";
  reason: any;
}

type PromiseSettledResult<T> =
  | PromiseFulfilledResult<T>
  | PromiseRejectedResult;

interface PromiseConstructor {
  /**
   * Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T extends readonly unknown[] | readonly [unknown]>(
    values: T
  ): Promise<{
    -readonly [P in keyof T]: PromiseSettledResult<
      T[P] extends PromiseLike<infer U> ? U : T[P]
    >;
  }>;

  /**
   * Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T>(
    values: Iterable<T>
  ): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * Matches a string with a regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param regexp A variable name or string literal containing the regular expression pattern and flags.
   */
  matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A regular expression method that matches the regular expression against a string. Called
   * by the String.prototype.matchAll method.
   */
  readonly matchAll: symbol;
}

interface RegExp {
  /**
   * Matches a string with this regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param string A string to search within.
   */
  [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/////////////////////////////
/// ECMAScript APIs
/////////////////////////////
declare var NaN: number;
declare var Infinity: number;

/**
 * Evaluates JavaScript code and executes it.
 * @param x A String value that contains valid JavaScript code.
 */
declare function eval(x: string): any;

/**
 * Converts a string to an integer.
 * @param s A string to convert into a number.
 * @param radix A value between 2 and 36 that specifies the base of the number in numString.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.
 */
declare function parseInt(s: string, radix?: number): number;

/**
 * Converts a string to a floating-point number.
 * @param string A string that contains a floating-point number.
 */
declare function parseFloat(string: string): number;

/**
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
 * @param number A numeric value.
 */
declare function isNaN(number: number): boolean;

/**
 * Determines whether a supplied number is finite.
 * @param number Any numeric value.
 */
declare function isFinite(number: number): boolean;

/**
 * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
 * @param encodedURI A value representing an encoded URI.
 */
declare function decodeURI(encodedURI: string): string;

/**
 * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
 * @param encodedURIComponent A value representing an encoded URI component.
 */
declare function decodeURIComponent(encodedURIComponent: string): string;

/**
 * Encodes a text string as a valid Uniform Resource Identifier (URI)
 * @param uri A value representing an encoded URI.
 */
declare function encodeURI(uri: string): string;

/**
 * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
 * @param uriComponent A value representing an encoded URI component.
 */
declare function encodeURIComponent(
  uriComponent: string | number | boolean
): string;

/**
 * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
 * @param string A string value
 */
declare function escape(string: string): string;

/**
 * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.
 * @param string A string value
 */
declare function unescape(string: string): string;

interface Symbol {
  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

interface PropertyDescriptorMap {
  [s: string]: PropertyDescriptor;
}

interface Object {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;

  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
  new (value?: any): Object;
  (): any;
  (value: any): any;

  /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;

  /**
   * Returns the prototype of an object.
   * @param o The object that references the prototype.
   */
  getPrototypeOf(o: any): any;

  /**
   * Gets the own property descriptor of the specified object.
   * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
   * @param o Object that contains the property.
   * @param p Name of the property.
   */
  getOwnPropertyDescriptor(
    o: any,
    p: PropertyKey
  ): PropertyDescriptor | undefined;

  /**
   * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
   * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
   * @param o Object that contains the own properties.
   */
  getOwnPropertyNames(o: any): string[];

  /**
   * Creates an object that has the specified prototype or that has null prototype.
   * @param o Object to use as a prototype. May be null.
   */
  create(o: object | null): any;

  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o Object to use as a prototype. May be null
   * @param properties JavaScript object that contains one or more property descriptors.
   */
  create(
    o: object | null,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * Adds a property to an object, or modifies attributes of an existing property.
   * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
   * @param p The property name.
   * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
   */
  defineProperty(
    o: any,
    p: PropertyKey,
    attributes: PropertyDescriptor & ThisType<any>
  ): any;

  /**
   * Adds one or more properties to an object, and/or modifies attributes of existing properties.
   * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
   * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
   */
  defineProperties(
    o: any,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  seal<T>(o: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(a: T[]): readonly T[];

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T extends Function>(f: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(o: T): Readonly<T>;

  /**
   * Prevents the addition of new properties to an object.
   * @param o Object to make non-extensible.
   */
  preventExtensions<T>(o: T): T;

  /**
   * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isSealed(o: any): boolean;

  /**
   * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isFrozen(o: any): boolean;

  /**
   * Returns a value that indicates whether new properties can be added to an object.
   * @param o Object to test.
   */
  isExtensible(o: any): boolean;

  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: object): string[];
}

/**
 * Provides functionality common to all JavaScript objects.
 */
declare var Object: ObjectConstructor;

/**
 * Creates a new function.
 */
interface Function {
  /**
   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   */
  apply(this: Function, thisArg: any, argArray?: any): any;

  /**
   * Calls a method of an object, substituting another object for the current object.
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   */
  bind(this: Function, thisArg: any, ...argArray: any[]): any;

  /** Returns a string representation of a function. */
  toString(): string;

  prototype: any;
  readonly length: number;

  // Non-standard extensions
  arguments: any;
  caller: Function;
}

interface FunctionConstructor {
  /**
   * Creates a new function.
   * @param args A list of arguments the function accepts.
   */
  new (...args: string[]): Function;
  (...args: string[]): Function;
  readonly prototype: Function;
}

declare var Function: FunctionConstructor;

/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

interface CallableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T, R>(this: (this: T) => R, thisArg: T): R;
  apply<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    args: A
  ): R;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
  bind<T, A0, A extends any[], R>(
    this: (this: T, arg0: A0, ...args: A) => R,
    thisArg: T,
    arg0: A0
  ): (...args: A) => R;
  bind<T, A0, A1, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A3, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): (...args: A) => R;
  bind<T, AX, R>(
    this: (this: T, ...args: AX[]) => R,
    thisArg: T,
    ...args: AX[]
  ): (...args: AX[]) => R;
}

interface NewableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T>(this: new () => T, thisArg: T): void;
  apply<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    args: A
  ): void;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    ...args: A
  ): void;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: any): T;
  bind<A0, A extends any[], R>(
    this: new (arg0: A0, ...args: A) => R,
    thisArg: any,
    arg0: A0
  ): new (...args: A) => R;
  bind<A0, A1, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1
  ): new (...args: A) => R;
  bind<A0, A1, A2, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): new (...args: A) => R;
  bind<A0, A1, A2, A3, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): new (...args: A) => R;
  bind<AX, R>(
    this: new (...args: AX[]) => R,
    thisArg: any,
    ...args: AX[]
  ): new (...args: AX[]) => R;
}

interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

interface String {
  /** Returns a string representation of a string. */
  toString(): string;

  /**
   * Returns the character at the specified index.
   * @param pos The zero-based index of the desired character.
   */
  charAt(pos: number): string;

  /**
   * Returns the Unicode value of the character at the specified location.
   * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
   */
  charCodeAt(index: number): number;

  /**
   * Returns a string that contains the concatenation of two or more strings.
   * @param strings The strings to append to the end of the string.
   */
  concat(...strings: string[]): string;

  /**
   * Returns the position of the first occurrence of a substring.
   * @param searchString The substring to search for in the string
   * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
   */
  indexOf(searchString: string, position?: number): number;

  /**
   * Returns the last occurrence of a substring in the string.
   * @param searchString The substring to search for.
   * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
   */
  lastIndexOf(searchString: string, position?: number): number;

  /**
   * Determines whether two strings are equivalent in the current locale.
   * @param that String to compare to target string
   */
  localeCompare(that: string): number;

  /**
   * Matches a string with a regular expression, and returns an array containing the results of that search.
   * @param regexp A variable name or string literal containing the regular expression pattern and flags.
   */
  match(regexp: string | RegExp): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(searchValue: string | RegExp, replaceValue: string): string;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replacer A function that returns the replacement text.
   */
  replace(
    searchValue: string | RegExp,
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * Finds the first substring match in a regular expression search.
   * @param regexp The regular expression pattern and applicable flags.
   */
  search(regexp: string | RegExp): number;

  /**
   * Returns a section of a string.
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   */
  slice(start?: number, end?: number): string;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(separator: string | RegExp, limit?: number): string[];

  /**
   * Returns the substring at the specified location within a String object.
   * @param start The zero-based index number indicating the beginning of the substring.
   * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
   * If end is omitted, the characters from start through the end of the original string are returned.
   */
  substring(start: number, end?: number): string;

  /** Converts all the alphabetic characters in a string to lowercase. */
  toLowerCase(): string;

  /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
  toLocaleLowerCase(locales?: string | string[]): string;

  /** Converts all the alphabetic characters in a string to uppercase. */
  toUpperCase(): string;

  /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
  toLocaleUpperCase(locales?: string | string[]): string;

  /** Removes the leading and trailing white space and line terminator characters from a string. */
  trim(): string;

  /** Returns the length of a String object. */
  readonly length: number;

  // IE extensions
  /**
   * Gets a substring beginning at the specified location and having the specified length.
   * @param from The starting position of the desired substring. The index of the first character in the string is zero.
   * @param length The number of characters to include in the returned substring.
   */
  substr(from: number, length?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): string;

  readonly [index: number]: string;
}

interface StringConstructor {
  new (value?: any): String;
  (value?: any): string;
  readonly prototype: String;
  fromCharCode(...codes: number[]): string;
}

/**
 * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
 */
declare var String: StringConstructor;

interface Boolean {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}

interface BooleanConstructor {
  new (value?: any): Boolean;
  <T>(value?: T): boolean;
  readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

interface Number {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(radix?: number): string;

  /**
   * Returns a string representing a number in fixed-point notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented in exponential notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toExponential(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  toPrecision(precision?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): number;
}

interface NumberConstructor {
  new (value?: any): Number;
  (value?: any): number;
  readonly prototype: Number;

  /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
  readonly MAX_VALUE: number;

  /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
  readonly MIN_VALUE: number;

  /**
   * A value that is not a number.
   * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
   */
  readonly NaN: number;

  /**
   * A value that is less than the largest negative number that can be represented in JavaScript.
   * JavaScript displays NEGATIVE_INFINITY values as -infinity.
   */
  readonly NEGATIVE_INFINITY: number;

  /**
   * A value greater than the largest number that can be represented in JavaScript.
   * JavaScript displays POSITIVE_INFINITY values as infinity.
   */
  readonly POSITIVE_INFINITY: number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;

interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: readonly string[];
}

/**
 * The type of `import.meta`.
 *
 * If you need to declare that a given property exists on `import.meta`,
 * this type may be augmented via interface merging.
 */
interface ImportMeta {}

interface Math {
  /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
  readonly E: number;
  /** The natural logarithm of 10. */
  readonly LN10: number;
  /** The natural logarithm of 2. */
  readonly LN2: number;
  /** The base-2 logarithm of e. */
  readonly LOG2E: number;
  /** The base-10 logarithm of e. */
  readonly LOG10E: number;
  /** Pi. This is the ratio of the circumference of a circle to its diameter. */
  readonly PI: number;
  /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
  readonly SQRT1_2: number;
  /** The square root of 2. */
  readonly SQRT2: number;
  /**
   * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
   * For example, the absolute value of -5 is the same as the absolute value of 5.
   * @param x A numeric expression for which the absolute value is needed.
   */
  abs(x: number): number;
  /**
   * Returns the arc cosine (or inverse cosine) of a number.
   * @param x A numeric expression.
   */
  acos(x: number): number;
  /**
   * Returns the arcsine of a number.
   * @param x A numeric expression.
   */
  asin(x: number): number;
  /**
   * Returns the arctangent of a number.
   * @param x A numeric expression for which the arctangent is needed.
   */
  atan(x: number): number;
  /**
   * Returns the angle (in radians) from the X axis to a point.
   * @param y A numeric expression representing the cartesian y-coordinate.
   * @param x A numeric expression representing the cartesian x-coordinate.
   */
  atan2(y: number, x: number): number;
  /**
   * Returns the smallest integer greater than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  ceil(x: number): number;
  /**
   * Returns the cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  cos(x: number): number;
  /**
   * Returns e (the base of natural logarithms) raised to a power.
   * @param x A numeric expression representing the power of e.
   */
  exp(x: number): number;
  /**
   * Returns the greatest integer less than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  floor(x: number): number;
  /**
   * Returns the natural logarithm (base e) of a number.
   * @param x A numeric expression.
   */
  log(x: number): number;
  /**
   * Returns the larger of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  max(...values: number[]): number;
  /**
   * Returns the smaller of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  min(...values: number[]): number;
  /**
   * Returns the value of a base expression taken to a specified power.
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   */
  pow(x: number, y: number): number;
  /** Returns a pseudorandom number between 0 and 1. */
  random(): number;
  /**
   * Returns a supplied numeric expression rounded to the nearest integer.
   * @param x The value to be rounded to the nearest integer.
   */
  round(x: number): number;
  /**
   * Returns the sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  sin(x: number): number;
  /**
   * Returns the square root of a number.
   * @param x A numeric expression.
   */
  sqrt(x: number): number;
  /**
   * Returns the tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  tan(x: number): number;
}
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

/** 启用日期和时间的基本存储和检索功能。 */
interface Date {
  /** 返回日期的字符串表示形式。字符串的格式取决于本地化设置。 */
  toString(): string;
  /** 以字符串值返回日期。 */
  toDateString(): string;
  /** 以字符串值返回时间。 */
  toTimeString(): string;
  /** 以适合主机环境当前本地化设置的字符串值返回值。 */
  toLocaleString(): string;
  /** 以适合主机环境当前本地化设置的字符串值返回日期。 */
  toLocaleDateString(): string;
  /** 以适合主机环境当前本地化设置的字符串值返回时间。 */
  toLocaleTimeString(): string;
  /** 返回自 1970 年 1 月 1 日午夜（UTC）以来的存储时间值（以毫秒为单位）。 */
  valueOf(): number;
  /** 获取时间值（以毫秒为单位）。 */
  getTime(): number;
  /** 使用本地时间获取年份。 */
  getFullYear(): number;
  /** 使用协调世界时 (UTC) 获取年份。 */
  getUTCFullYear(): number;
  /** 使用本地时间获取月份。 */
  getMonth(): number;
  /** 使用协调世界时 (UTC) 获取月份。 */
  getUTCMonth(): number;
  /** 使用本地时间获取月份中的日期。 */
  getDate(): number;
  /** 使用协调世界时 (UTC) 获取月份中的日期。 */
  getUTCDate(): number;
  /** 使用本地时间获取星期几。 */
  getDay(): number;
  /** 使用协调世界时 (UTC) 获取星期几。 */
  getUTCDay(): number;
  /** 使用本地时间获取小时数。 */
  getHours(): number;
  /** 使用协调世界时 (UTC) 获取 Date 对象中的小时数。 */
  getUTCHours(): number;
  /** 使用本地时间获取分钟数。 */
  getMinutes(): number;
  /** 使用协调世界时 (UTC) 获取 Date 对象中的分钟数。 */
  getUTCMinutes(): number;
  /** 使用本地时间获取秒数。 */
  getSeconds(): number;
  /** 使用协调世界时 (UTC) 获取 Date 对象中的秒数。 */
  getUTCSeconds(): number;
  /** 使用本地时间获取 Date 对象中的毫秒数。 */
  getMilliseconds(): number;
  /** 使用协调世界时 (UTC) 获取 Date 对象中的毫秒数。 */
  getUTCMilliseconds(): number;
  /** 获取本地计算机时间和协调世界时 (UTC) 之间的差值（以分钟为单位）。 */
  getTimezoneOffset(): number;

  /**
   * 设置 Date 对象中的日期和时间值。
   * @param time 自 1970 年 1 月 1 日午夜（GMT）以来经过的毫秒数。
   */
  setTime(time: number): number;

  /**
   * 使用本地时间设置 Date 对象中的毫秒值。
   * @param ms 等于毫秒值的数字。
   */
  setMilliseconds(ms: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的毫秒值。
   * @param ms 等于毫秒值的数字。
   */
  setUTCMilliseconds(ms: number): number;

  /**
   * 使用本地时间设置 Date 对象中的秒数。
   * @param sec 等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setSeconds(sec: number, ms?: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的秒数。
   * @param sec 等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setUTCSeconds(sec: number, ms?: number): number;

  /**
   * 使用本地时间设置 Date 对象中的分钟数。
   * @param min 等于分钟数的数字。
   * @param sec 可选参数，等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的分钟数。
   * @param min 等于分钟数的数字。
   * @param sec 可选参数，等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setUTCMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * 使用本地时间设置 Date 对象中的小时数。
   * @param hours 等于小时数的数字。
   * @param min 可选参数，等于分钟数的数字。
   * @param sec 可选参数，等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的小时数。
   * @param hours 等于小时数的数字。
   * @param min 可选参数，等于分钟数的数字。
   * @param sec 可选参数，等于秒数的数字。
   * @param ms 可选参数，等于毫秒值的数字。
   */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * 使用本地时间设置 Date 对象中的月份日期。
   * @param date 等于月份日期的数字。
   */
  setDate(date: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的月份日期。
   * @param date 等于月份日期的数字。
   */
  setUTCDate(date: number): number;

  /**
   * 使用本地时间设置 Date 对象中的月份。
   * @param month 等于月份的数字。1 月为 0，其他月份依次递增。
   * @param date 可选参数，等于月份日期的数字。如果未提供，则使用 `getDate` 方法的返回值。
   */
  setMonth(month: number, date?: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的月份。
   * @param month 等于月份的数字。1 月为 0，其他月份依次递增。
   * @param date 可选参数，等于月份日期的数字。如果未提供，则使用 `getUTCDate` 方法的返回值。
   */
  setUTCMonth(month: number, date?: number): number;

  /**
   * 使用本地时间设置 Date 对象中的年份。
   * @param year 等于年份的数字。
   * @param month 可选参数，等于月份的数字。1 月为 0，其他月份依次递增。如果提供了 `date` 参数，则必须提供此参数。
   * @param date 可选参数，等于月份日期的数字。
   */
  setFullYear(year: number, month?: number, date?: number): number;

  /**
   * 使用协调世界时 (UTC) 设置 Date 对象中的年份。
   * @param year 等于年份的数字。
   * @param month 可选参数，等于月份的数字。1 月为 0，其他月份依次递增。如果提供了 `date` 参数，则必须提供此参数。
   * @param date 可选参数，等于月份日期的数字。
   */
  setUTCFullYear(year: number, month?: number, date?: number): number;

  /**
   * 将日期转换为使用协调世界时 (UTC) 的字符串。
   */
  toUTCString(): string;

  /**
   * 将日期作为 ISO 格式的字符串值返回。
   */
  toISOString(): string;

  /**
   * 用于 `JSON.stringify` 方法，以便在将对象数据序列化为 JSON 时进行转换。
   */
  toJSON(key?: any): string;
}

interface DateConstructor {
  new (): Date;
  new (value: number | string): Date;
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): Date;
  (): string;
  readonly prototype: Date;
  /**
   * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s A date string
   */
  parse(s: string): number;
  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param month The month as a number between 0 and 11 (January to December).
   * @param date The date as a number between 1 and 31.
   * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
   * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
   * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
   * @param ms A number from 0 to 999 that specifies the milliseconds.
   */
  UTC(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): number;
  now(): number;
}

declare var Date: DateConstructor;

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
}

interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}

interface RegExp {
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(string: string): RegExpExecArray | null;

  /**
   * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string String on which to perform the search.
   */
  test(string: string): boolean;

  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
  readonly source: string;

  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
  readonly global: boolean;

  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
  readonly ignoreCase: boolean;

  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
  readonly multiline: boolean;

  lastIndex: number;

  // Non-standard extensions
  compile(): this;
}

interface RegExpConstructor {
  new (pattern: RegExp | string): RegExp;
  new (pattern: string, flags?: string): RegExp;
  (pattern: RegExp | string): RegExp;
  (pattern: string, flags?: string): RegExp;
  readonly prototype: RegExp;

  // Non-standard extensions
  $1: string;
  $2: string;
  $3: string;
  $4: string;
  $5: string;
  $6: string;
  $7: string;
  $8: string;
  $9: string;
  lastMatch: string;
}

declare var RegExp: RegExpConstructor;

interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorConstructor {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}

declare var Error: ErrorConstructor;

interface EvalError extends Error {}

interface EvalErrorConstructor extends ErrorConstructor {
  new (message?: string): EvalError;
  (message?: string): EvalError;
  readonly prototype: EvalError;
}

declare var EvalError: EvalErrorConstructor;

interface RangeError extends Error {}

interface RangeErrorConstructor extends ErrorConstructor {
  new (message?: string): RangeError;
  (message?: string): RangeError;
  readonly prototype: RangeError;
}

declare var RangeError: RangeErrorConstructor;

interface ReferenceError extends Error {}

interface ReferenceErrorConstructor extends ErrorConstructor {
  new (message?: string): ReferenceError;
  (message?: string): ReferenceError;
  readonly prototype: ReferenceError;
}

declare var ReferenceError: ReferenceErrorConstructor;

interface SyntaxError extends Error {}

interface SyntaxErrorConstructor extends ErrorConstructor {
  new (message?: string): SyntaxError;
  (message?: string): SyntaxError;
  readonly prototype: SyntaxError;
}

declare var SyntaxError: SyntaxErrorConstructor;

interface TypeError extends Error {}

interface TypeErrorConstructor extends ErrorConstructor {
  new (message?: string): TypeError;
  (message?: string): TypeError;
  readonly prototype: TypeError;
}

declare var TypeError: TypeErrorConstructor;

interface URIError extends Error {}

interface URIErrorConstructor extends ErrorConstructor {
  new (message?: string): URIError;
  (message?: string): URIError;
  readonly prototype: URIError;
}

declare var URIError: URIErrorConstructor;

interface JSON {
  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  parse(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
  ): any;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): string;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(
    value: any,
    replacer?: (number | string)[] | null,
    space?: string | number
  ): string;
}

/**
 * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 */
declare var JSON: JSON;

/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface ReadonlyArray<T> {
  /**
   * Gets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  readonly length: number;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: readonly T[]) => void,
    thisArg?: any
  ): void;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: readonly T[]) => U,
    thisArg?: any
  ): U[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    callbackfn: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): S[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): T[];
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;

  readonly [n: number]: T;
}

interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
  join(separator?: string): string;
  slice(start?: number, end?: number): T[];
}

interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): T | undefined;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: T[]): number;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): T[];
  /**
   * Removes the first element from an array and returns it.
   */
  shift(): T | undefined;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): T[];
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    callbackfn: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;

  [n: number]: T;
}

interface ArrayConstructor {
  new (arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...items: T[]): T[];
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...items: T[]): T[];
  isArray(arg: any): arg is any[];
  readonly prototype: any[];
}

declare var Array: ArrayConstructor;

interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

declare type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
declare type PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => void;
declare type MethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;

declare type PromiseConstructorLike = new <T>(
  executor: (
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) => void
) => PromiseLike<T>;

interface PromiseLike<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2>;
}

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>;
}

interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> {}

/**
 * Represents a raw buffer of binary data, which is used to store data for the
 * different typed arrays. ArrayBuffers cannot be read from or written to directly,
 * but can be passed to a typed array or DataView Object to interpret the raw
 * buffer as needed.
 */
interface ArrayBuffer {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /**
   * Returns a section of an ArrayBuffer.
   */
  slice(begin: number, end?: number): ArrayBuffer;
}

/**
 * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
 */
interface ArrayBufferTypes {
  ArrayBuffer: ArrayBuffer;
}
type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];

interface ArrayBufferConstructor {
  readonly prototype: ArrayBuffer;
  new (byteLength: number): ArrayBuffer;
  isView(arg: any): arg is ArrayBufferView;
}
declare var ArrayBuffer: ArrayBufferConstructor;

interface ArrayBufferView {
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  byteOffset: number;
}

interface DataView {
  readonly buffer: ArrayBuffer;
  readonly byteLength: number;
  readonly byteOffset: number;
  /**
   * Gets the Float32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getFloat32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Float64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getFloat64(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Int8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt8(byteOffset: number): number;

  /**
   * Gets the Int16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt16(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Int32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Uint8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint8(byteOffset: number): number;

  /**
   * Gets the Uint16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint16(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Uint32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Stores an Float32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Float64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Int8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setInt8(byteOffset: number, value: number): void;

  /**
   * Stores an Int16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Int32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Uint8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setUint8(byteOffset: number, value: number): void;

  /**
   * Stores an Uint16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Uint32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}

interface DataViewConstructor {
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    byteLength?: number
  ): DataView;
}
declare var DataView: DataViewConstructor;

/**
 * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Int8Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int8Array) => any,
    thisArg?: any
  ): Int8Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int8Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any
  ): Int8Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int8Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int8Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int8Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}
interface Int8ArrayConstructor {
  readonly prototype: Int8Array;
  new (length: number): Int8Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int8Array;
  new (buffer: ArrayBufferLike, byteOffset: number, length?: number): Int8Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int8Array;
}
declare var Int8Array: Int8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint8Array) => any,
    thisArg?: any
  ): Uint8Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint8Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint8Array) => number,
    thisArg?: any
  ): Uint8Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint8ArrayConstructor {
  readonly prototype: Uint8Array;
  new (length: number): Uint8Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint8Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint8Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8Array;
}
declare var Uint8Array: Uint8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
 * If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8ClampedArray {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint8ClampedArray) => any,
    thisArg?: any
  ): Uint8ClampedArray;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => number,
    thisArg?: any
  ): Uint8ClampedArray;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8ClampedArray;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8ClampedArray;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8ClampedArray;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint8ClampedArrayConstructor {
  readonly prototype: Uint8ClampedArray;
  new (length: number): Uint8ClampedArray;
  new (
    arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike
  ): Uint8ClampedArray;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint8ClampedArray;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8ClampedArray;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8ClampedArray;
}
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;

/**
 * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Int16Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int16Array) => any,
    thisArg?: any
  ): Int16Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int16Array) => void,
    thisArg?: any
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int16Array) => number,
    thisArg?: any
  ): Int16Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int16Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int16Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int16Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Int16ArrayConstructor {
  readonly prototype: Int16Array;
  new (length: number): Int16Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int16Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Int16Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int16Array;
}
declare var Int16Array: Int16ArrayConstructor;

/**
 * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint16Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint16Array) => any,
    thisArg?: any
  ): Uint16Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint16Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint16Array) => number,
    thisArg?: any
  ): Uint16Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint16Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint16Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint16Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint16ArrayConstructor {
  readonly prototype: Uint16Array;
  new (length: number): Uint16Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint16Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint16Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint16Array;
}
declare var Uint16Array: Uint16ArrayConstructor;
/**
 * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Int32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int32Array) => any,
    thisArg?: any
  ): Int32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int32Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int32Array) => number,
    thisArg?: any
  ): Int32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Int32ArrayConstructor {
  readonly prototype: Int32Array;
  new (length: number): Int32Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int32Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Int32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int32Array;
}
declare var Int32Array: Int32ArrayConstructor;

/**
 * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint32Array) => any,
    thisArg?: any
  ): Uint32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint32Array) => void,
    thisArg?: any
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint32Array) => number,
    thisArg?: any
  ): Uint32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint32ArrayConstructor {
  readonly prototype: Uint32Array;
  new (length: number): Uint32Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint32Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint32Array;
}
declare var Uint32Array: Uint32ArrayConstructor;

/**
 * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
 * of bytes could not be allocated an exception is raised.
 */
interface Float32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Float32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Float32Array) => any,
    thisArg?: any
  ): Float32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Float32Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Float32Array) => number,
    thisArg?: any
  ): Float32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Float32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Float32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Float32ArrayConstructor {
  readonly prototype: Float32Array;
  new (length: number): Float32Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float32Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Float32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Float32Array;
}
declare var Float32Array: Float32ArrayConstructor;

/**
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Float64Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Float64Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Float64Array) => any,
    thisArg?: any
  ): Float64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Float64Array) => void,
    thisArg?: any
  ): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Float64Array) => number,
    thisArg?: any
  ): Float64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Float64Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Float64Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float64Array;

  toString(): string;

  [index: number]: number;
}

interface Float64ArrayConstructor {
  readonly prototype: Float64Array;
  new (length: number): Float64Array;
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float64Array;
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Float64Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Float64Array;
}
declare var Float64Array: Float64ArrayConstructor;

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////

declare namespace Intl {
  interface CollatorOptions {
    usage?: string;
    localeMatcher?: string;
    numeric?: boolean;
    caseFirst?: string;
    sensitivity?: string;
    ignorePunctuation?: boolean;
  }

  interface ResolvedCollatorOptions {
    locale: string;
    usage: string;
    sensitivity: string;
    ignorePunctuation: boolean;
    collation: string;
    caseFirst: string;
    numeric: boolean;
  }

  interface Collator {
    compare(x: string, y: string): number;
    resolvedOptions(): ResolvedCollatorOptions;
  }
  var Collator: {
    new (locales?: string | string[], options?: CollatorOptions): Collator;
    (locales?: string | string[], options?: CollatorOptions): Collator;
    supportedLocalesOf(
      locales: string | string[],
      options?: CollatorOptions
    ): string[];
  };

  interface NumberFormatOptions {
    localeMatcher?: string;
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
  }

  interface ResolvedNumberFormatOptions {
    locale: string;
    numberingSystem: string;
    style: string;
    currency?: string;
    currencyDisplay?: string;
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    useGrouping: boolean;
  }

  interface NumberFormat {
    format(value: number): string;
    resolvedOptions(): ResolvedNumberFormatOptions;
  }
  var NumberFormat: {
    new (
      locales?: string | string[],
      options?: NumberFormatOptions
    ): NumberFormat;
    (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
    supportedLocalesOf(
      locales: string | string[],
      options?: NumberFormatOptions
    ): string[];
  };

  interface DateTimeFormatOptions {
    localeMatcher?: string;
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
    formatMatcher?: string;
    hour12?: boolean;
    timeZone?: string;
  }

  interface ResolvedDateTimeFormatOptions {
    locale: string;
    calendar: string;
    numberingSystem: string;
    timeZone: string;
    hour12?: boolean;
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
  }

  interface DateTimeFormat {
    format(date?: Date | number): string;
    resolvedOptions(): ResolvedDateTimeFormatOptions;
  }
  var DateTimeFormat: {
    new (
      locales?: string | string[],
      options?: DateTimeFormatOptions
    ): DateTimeFormat;
    (
      locales?: string | string[],
      options?: DateTimeFormatOptions
    ): DateTimeFormat;
    supportedLocalesOf(
      locales: string | string[],
      options?: DateTimeFormatOptions
    ): string[];
  };
}

interface String {
  /**
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that String to compare to target string
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(
    that: string,
    locales?: string | string[],
    options?: Intl.CollatorOptions
  ): number;
}

interface Number {
  /**
   * Converts a number to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | string[],
    options?: Intl.NumberFormatOptions
  ): string;
}

interface Date {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;
  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;

  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;
}
interface GUIData {
  name: string;
  attributes?: {
    [name: string]: string | number;
  };
  children?: GUIData[];
}
interface GUIBind<T extends string> {
  event: string;
  selector?: string;
  action: T;
}
interface GUIBindDefinition<T> {
  drag: {
    attributes: {
      [name: string]: "x" | "-x" | "y" | "-y";
    };
    targetSelector: string;
  };
  show: {
    name: T;
    allowMultiple?: boolean;
  };
  remove: {
    targetSelector: string;
  };
  sendMessage: {
    messageName: string;
    messageData?: string[];
  };
  clipboardWrite: {
    targetSelector: string;
    attributeName: string;
  };
}
declare type GUIBindTypeMap<T> = {
  [key in keyof GUIBindDefinition<T>]: GUIBind<key> & GUIBindDefinition<T>[key];
};
declare type GUIBindTypes<T> = GUIBindTypeMap<T>[keyof GUIBindTypeMap<T>];
interface GUIConfigItem<T extends string> {
  display?: boolean;
  bindings?: GUIBindTypes<T>[];
  data: string | GUIData;
}
declare type GUIConfig<T extends string, U extends T> = {
  [name in T]: GUIConfigItem<U>;
};
declare type JSONValue =
  | string
  | number
  | boolean
  | {
      [x: string]: JSONValue;
    }
  | Array<JSONValue>;

declare enum GameLogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
}
declare type GameLoggerMethod = (...args: any[]) => void;
declare class GameConsole {
  clear: () => void;
  constructor(
    log: (level: GameLogLevel, message: string) => void,
    clear: () => void
  );
  assert: (assertion: any, ...args: any[]) => void;
  log: GameLoggerMethod;
  debug: GameLoggerMethod;
  error: GameLoggerMethod;
  warn: GameLoggerMethod;
  dir: () => void;
  dirxml: () => void;
  group: () => void;
  groupCollapsed: () => void;
  groupEnd: () => void;
  table: () => void;
  time: () => void;
  timeEnd: () => void;
  timeLog: () => void;
  timeStamp: () => void;
  trace: () => void;
}

/**  定义远传错误状态类型，表示可能的错误情况 */
declare type TELEPORT_ERROR_STATUS =
  | "PLAYER_OFFLINE"
  | "ACCESS_DENIED"
  | "UNKNOWN";

/**  定义远传函数类型，包含地图ID、玩家列表和可选的服务器ID作为参数，返回Promise<TeleportResult> */
declare type TeleportType = (
  mapId: string,
  players: GameEntity[],
  serverId?: (string & {}) | "public"
) => Promise<TeleportResult>;

/**  定义远传结果类型，包含服务器ID */
declare type TeleportResult = {
  serverId: string;
};

/**
 * 社交关系类型枚举
 */
declare enum SocialType {
  /**
   * 表示用户正在关注的人
   */
  FOLLOWING = 0,
  /**
   * 表示用户的粉丝
   */
  FOLLOWERS = 1,
  /**
   * 表示用户的双向关注者，即互相关注的人
   */
  FRIENDS = 2,
}

/**
 * 定义社交统计信息的类型
 */
type SocialStatisticType = {
  /**
   * 表示用户关注的人数
   */
  followingNum: number;
  /**
   * 表示用户的粉丝人数
   */
  followerNum: number;
  /**
   * 表示用户的好友人数
   */
  friendsNum: number;
};

/**
 * 定义游戏音效配置的接口
 * 此接口用于标准化音效配置，确保音效在游戏中的表现一致性和可预测性
 */
interface GameSoundEffectConfig {
  /** 音效样本的标识符，用于引用特定的音效资源 */
  sample: string;
  /** 音效生效的最大半径，超出此范围将无法听到音效 */
  radius: number;
  /** 音效的基础音量增益，用于控制音效的初始响度 */
  gain: number;
  /** 音量增益的变化范围，用于随机化音效的响度，增加真实感 */
  gainRange: number;
  /** 音效的基础音高，用于控制音效的初始频率 */
  pitch: number;
  /** 音高变化的范围，用于随机化音效的频率，增加多样性和真实感 */
  pitchRange: number;
}
/**
 * 单个音效表
 */
declare class GameSoundEffect implements GameSoundEffectConfig {
  /**
   * 样本权重
   */
  radius: number;
  /**
   * 音量增益，使声音更大
   */
  gain: number;
  /**
   * 音量增益的变化范围
   */
  gainRange: number;
  /**
   * 音调调整倍数。
   * * 1 : 正常
   * * < 1 : 播放速度变慢
   * * > 1 : 播放速度变快
   */
  pitch: number;
  /**
   * 音调变化范围
   */
  pitchRange: number;
  /**
   * 样本路径
   */
  sample: GameAudioAssets;
}
/**
 * 触发器可以用于检测对象何时进入或离开某个区域。
 */
declare class GameZone {
  /**
   * 列出所有实体
   */
  entities: () => GameEntity[];

  /**
   * 当实体进入区域时触发
   */
  onEnter: GameEventChannel<GameTriggerEvent>;

  /**
   * 获取下一个进入事件
   */
  nextEnter: GameEventFuture<GameTriggerEvent>;

  /**
   * 当实体离开区域时触发
   */
  onLeave: GameEventChannel<GameTriggerEvent>;

  /**
   * 获取下一个离开事件
   */
  nextLeave: GameEventFuture<GameTriggerEvent>;

  /**
   * 销毁区域
   */
  remove: () => void;

  /**
   * 区域的边界
   */
  bounds: GameBounds3;

  /**
   * 选择器过滤条件
   */
  selector: GameSelectorString;

  /**
   * 控制对象的质量对力的影响
   * 0 = 行为像重力
   * 1 = 行为像风
   */
  massScale: number;

  /**
   * 应用到对象上的力的大小
   */
  force: GameVector3;

  /**
   * 是否启用雾效果
   */
  fogEnabled: boolean;

  /**
   * 雾的颜色
   */
  fogColor: GameRGBColor;

  /**
   * 雾开始的距离
   */
  fogStartDistance: number;

  /**
   * 雾的高度偏移
   */
  fogHeightOffset: number;

  /**
   * 雾的高度衰减
   */
  fogHeightFalloff: number;

  /**
   * 雾的密度
   */
  fogDensity: number;

  /**
   * 雾的最大值
   */
  fogMax: number;

  /**
   * 是否启用雪效果
   */
  snowEnabled: boolean;

  /**
   * 雪的密度
   */
  snowDensity: number;

  /**
   * 雪的最小尺寸
   */
  snowSizeLo: number;

  /**
   * 雪的最大尺寸
   */
  snowSizeHi: number;

  /**
   * 雪的下落速度
   */
  snowFallSpeed: number;

  /**
   * 雪的旋转速度
   */
  snowSpinSpeed: number;

  /**
   * 雪的颜色
   */
  snowColor: GameRGBAColor;

  /**
   * 雪的纹理
   */
  snowTexture: string;

  /**
   * 是否启用雨效果
   */
  rainEnabled: boolean;

  /**
   * 雨的密度
   */
  rainDensity: number;

  /**
   * 雨的方向
   */
  rainDirection: GameVector3;

  /**
   * 雨的速度
   */
  rainSpeed: number;

  /**
   * 雨的最小尺寸
   */
  rainSizeLo: number;

  /**
   * 雨的最大尺寸
   */
  rainSizeHi: number;

  /**
   * 雨的干扰程度
   */
  rainInterference: number;

  /**
   * 雨的颜色
   */
  rainColor: GameRGBAColor;

  /**
   * 是否启用天空效果
   */
  skyEnabled: boolean;

  /**
   * 天空模式
   * 'natural' - 自然模式
   * 'manual' - 手动模式
   */
  skyMode: "natural" | "manual";

  /**
   * 太阳相位
   */
  skySunPhase: number;

  /**
   * 太阳频率
   */
  skySunFrequency: number;

  /**
   * 月相
   */
  skyLunarPhase: number;

  /**
   * 太阳方向
   */
  skySunDirection: GameVector3;

  /**
   * 太阳光颜色
   */
  skySunLight: GameRGBColor;

  /**
   * 左侧光颜色
   */
  skyLeftLight: GameRGBColor;

  /**
   * 右侧光颜色
   */
  skyRightLight: GameRGBColor;

  /**
   * 底部光颜色
   */
  skyBottomLight: GameRGBColor;

  /**
   * 顶部光颜色
   */
  skyTopLight: GameRGBColor;

  /**
   * 前方光颜色
   */
  skyFrontLight: GameRGBColor;

  /**
   * 后方光颜色
   */
  skyBackLight: GameRGBColor;

  /**
   * 构造函数
   * @param entities - 列出所有实体的函数
   * @param onEnter - 实体进入区域时触发的事件通道
   * @param nextEnter - 获取下一个进入事件的未来对象
   * @param onLeave - 实体离开区域时触发的事件通道
   * @param nextLeave - 获取下一个离开事件的未来对象
   * @param remove - 销毁区域的函数
   */
  constructor(
    entities: () => GameEntity[],
    onEnter: GameEventChannel<GameTriggerEvent>,
    nextEnter: GameEventFuture<GameTriggerEvent>,
    onLeave: GameEventChannel<GameTriggerEvent>,
    nextLeave: GameEventFuture<GameTriggerEvent>,
    remove: () => void
  );
}

/**
 * 定义游戏区域的配置对象
 * 包含了游戏区域内各种环境效果和物理属性的配置
 */
declare type GameZoneConfig = {
  // 定义游戏区域的边界
  bounds: GameBounds3;
  // 定义游戏区域的选择器字符串，用于标识和选择游戏区域
  selector: GameSelectorString;
  // 定义物体质量的缩放因子，影响物理模拟中的质量计算
  massScale: number;
  // 定义应用于游戏区域内的力矢量
  force: GameVector3;
  // 表示是否启用雾效
  fogEnabled: boolean;
  // 定义雾效的颜色
  fogColor: GameRGBColor;
  // 定义雾效的起始距离
  fogStartDistance: number;
  // 定义雾效的高度偏移量
  fogHeightOffset: number;
  // 定义雾效的高度衰减系数
  fogHeightFalloff: number;
  // 定义雾效的密度
  fogDensity: number;
  // 定义雾效的最大浓度
  fogMax: number;
  // 表示是否启用雪效
  snowEnabled: boolean;
  // 定义雪效的密度
  snowDensity: number;
  // 定义雪粒子的最小尺寸
  snowSizeLo: number;
  // 定义雪粒子的最大尺寸
  snowSizeHi: number;
  // 定义雪粒子的下落速度
  snowFallSpeed: number;
  // 定义雪粒子的旋转速度
  snowSpinSpeed: number;
  // 定义雪效的颜色
  snowColor: GameRGBAColor;
  // 定义雪粒子的纹理贴图路径
  snowTexture: string;
  // 表示是否启用雨效
  rainEnabled: boolean;
  // 定义雨效的密度
  rainDensity: number;
  // 定义雨效的方向矢量
  rainDirection: GameVector3;
  // 定义雨效的速度
  rainSpeed: number;
  // 定义雨粒子的最小尺寸
  rainSizeLo: number;
  // 定义雨粒子的最大尺寸
  rainSizeHi: number;
  // 定义雨效对视线或信号的干扰程度
  rainInterference: number;
  // 定义雨效的颜色
  rainColor: GameRGBAColor;
  // 表示是否启用天空盒
  skyEnabled: boolean;
  // 定义天空盒的模式，可以是自然模式或手动模式
  skyMode: "natural" | "manual";
  // 定义天空盒的太阳相位，用于控制太阳的位置和光照
  skySunPhase: number;
  // 定义天空盒的太阳频率，用于控制太阳光照的变化速度
  skySunFrequency: number;
  // 定义天空盒的月相，用于控制月亮的外观
  skyLunarPhase: number;
  // 定义天空盒的太阳方向矢量
  skySunDirection: GameVector3;
  // 定义天空盒的太阳光颜色
  skySunLight: GameRGBColor;
  // 定义天空盒的左侧光颜色
  skyLeftLight: GameRGBColor;
  // 定义天空盒的右侧光颜色
  skyRightLight: GameRGBColor;
  // 定义天空盒的底部光颜色
  skyBottomLight: GameRGBColor;
  // 定义天空盒的顶部光颜色
  skyTopLight: GameRGBColor;
  // 定义天空盒的前方光颜色
  skyFrontLight: GameRGBColor;
  // 定义天空盒的后方光颜色
  skyBackLight: GameRGBColor;
};
declare enum GameAnimationPlaybackState {
  PENDING = "pending",
  RUNNING = "running",
  FINISHED = "finished",
}
declare enum GameAnimationDirection {
  NORMAL = "normal",
  REVERSE = "reverse",
  WRAP = "wrap",
  WRAP_REVERSE = "wrap-reverse",
  ALTERNATE = "alternate",
  ALTERNATE_REVERSE = "alternate-reverse",
}
declare enum GameEasing {
  NONE = "none",
  LINEAR = "linear",
  QUADRATIC = "quadratic",
  SINE = "sine",
  EXP = "exp",
  BACK = "back",
  ELASTIC = "elastic",
  BOUNCE = "bounce",
  CIRCLE = "circle",
}
/**
 * 定义游戏动画播放的配置接口
 * 这个接口包含了动画播放的所有必要参数，用于控制动画的行为和特性
 */
interface GameAnimationPlaybackConfig {
  // 动画开始的时间点，单位为毫秒
  startTick: number;
  // 动画开始前的延迟时间，单位为毫秒
  delay: number;
  // 动画结束后的延迟时间，单位为毫秒
  endDelay: number;
  // 动画持续的总时间，单位为毫秒
  duration: number;
  // 动画播放的方向，可能的值包括正向、反向、交替等
  direction: GameAnimationDirection;
  // 动画开始播放的位置，表示在动画周期中的一个比例
  iterationStart: number;
  // 动画重复播放的次数，无限重复时可以设置为特定值（例如Infinity）
  iterations: number;
}
declare class GameAnimation<KeyframeType, TargetType> {
  /**
   * 动画目标对象（可能是世界、玩家或实体）
   */
  target: TargetType;

  /**
   * 返回所有动画关键帧
   */
  keyframes: () => Partial<KeyframeType>[];

  /**
   * 开始或重新开始播放动画
   * @param playback 可选参数，包含动画播放配置的部分属性
   */
  play: (playback?: Partial<GameAnimationPlaybackConfig>) => void;

  /**
   * 取消当前动画播放
   */
  cancel: () => void;

  /**
   * 当动画开始时触发
   */
  onReady: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * 获取下一个动画准备完成的事件
   */
  nextReady: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * 当动画成功完成时触发
   */
  onFinish: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * 获取下一个动画完成的事件
   */
  nextFinish: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * 动画的当前播放时间（以动画帧为单位）
   */
  currentTime: number;

  /**
   * 动画的开始刻度
   */
  startTime: number;

  /**
   * 动画的当前播放状态
   */
  playState: GameAnimationPlaybackState;

  /**
   * 播放速率（每刻度的帧数）
   */
  playbackRate: number;
  /**
   * @ignore
   */
  constructor(
    /**
     * Animation target object (could be world, player or entity)
     */
    target: TargetType,
    /**
     * Returns all animation keyframes
     */
    keyframes: () => Partial<KeyframeType>[],
    currentTime: () => number,
    startTime: () => number,
    playState: () => GameAnimationPlaybackState,
    playbackRate: () => number,
    /**
     * Starts or restarts playback for the animation.
     */
    play: (playback?: Partial<GameAnimationPlaybackConfig>) => void,
    /**
     * Cancels current animation playback
     */
    cancel: () => void,
    /**
     * Fires when animation begins
     */
    onReady: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>,
    nextReady: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>,
    /**
     * Fires when animation completes successfully
     */
    onFinish: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>,
    nextFinish: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>
  );
  then<T>(
    resolve: (event: GameAnimationEvent<KeyframeType, TargetType>) => T,
    reject?: (error: any) => any
  ): any;
}
/**
 * 定义游戏世界的关键帧接口，用于描述游戏环境中各种效果和状态的动画变化
 */
interface GameWorldKeyframe {
  // 关键帧持续时间，单位为毫秒
  duration: number;
  // 加速曲线类型，用于控制关键帧开始时的变化速度
  easeIn: GameEasing;
  // 减速曲线类型，用于控制关键帧结束时的变化速度
  easeOut: GameEasing;
  // 雾效颜色，使用RGB格式
  fogColor: GameRGBColor;
  // 雾效起始距离，单位为米
  fogStartDistance: number;
  // 雾效高度偏移量，用于调整雾效的垂直位置
  fogHeightOffset: number;
  // 雾效高度衰减系数，用于控制雾效随高度减少的速度
  fogHeightFalloff: number;
  // 统一雾效密度，用于控制雾效的浓密程度
  fogUniformDensity: number;
  // 最大雾效强度，用于限制雾效的最大可见度
  maxFog: number;
  // 光照模式，可以是自然或手动
  lightMode: "natural" | "manual";
  // 太阳相位，用于控制太阳的位置和光照
  sunPhase: number;
  // 太阳频率，用于控制太阳光照的变化速度
  sunFrequency: number;
  // 月相，用于控制月亮的光照效果
  lunarPhase: number;
  // 太阳方向，使用三维向量表示
  sunDirection: GameVector3;
  // 太阳光照颜色，使用RGB格式
  sunLight: GameRGBColor;
  // 左侧天空光照颜色
  skyLeftLight: GameRGBColor;
  // 右侧天空光照颜色
  skyRightLight: GameRGBColor;
  // 底部天空光照颜色
  skyBottomLight: GameRGBColor;
  // 顶部天空光照颜色
  skyTopLight: GameRGBColor;
  // 前方天空光照颜色
  skyFrontLight: GameRGBColor;
  // 后方天空光照颜色
  skyBackLight: GameRGBColor;
  // 雨密度，用于控制雨效的浓密程度
  rainDensity: number;
  // 雨方向，使用三维向量表示
  rainDirection: GameVector3;
  // 雨速，单位为米/秒
  rainSpeed: number;
  // 小雨滴大小，单位为米
  rainSizeLo: number;
  // 大雨滴大小，单位为米
  rainSizeHi: number;
  // 雨干扰程度，用于控制雨滴的随机偏移
  rainInterference: number;
  // 雨色，使用RGBA格式，支持透明度
  rainColor: GameRGBAColor;
  // 雪密度，用于控制雪效的浓密程度
  snowDensity: number;
  // 小雪片大小，单位为米
  snowSizeLo: number;
  // 大雪片大小，单位为米
  snowSizeHi: number;
  // 雪片下落速度，单位为米/秒
  snowFallSpeed: number;
  // 雪片旋转速度，用于控制雪片的旋转动画
  snowSpinSpeed: number;
  // 雪色，使用RGBA格式，支持透明度
  snowColor: GameRGBAColor;
  // 雪纹理，使用字符串表示雪片的纹理资源
  snowTexture: string;
  // 重力加速度，用于控制物体下落速度
  gravity: number;
  // 空气摩擦系数，用于控制物体在空气中移动时的阻力
  airFriction: number;
}

/**
 * 定义声音类，用于控制声音的播放
 */
declare class Sound {
  /**
   * 可能用于控制音频或视频播放的函数，根据提供的参数恢复播放
   * @param currentTime 可选参数，指定当前播放的时间点，如果不提供，则从上次停止或暂停处继续播放
   */
  resume: (currentTime?: number) => void;

  /**
   * 设置当前播放时间的函数，允许精确控制播放进度
   * @param currentTime 必需参数，指定当前播放的时间点
   */
  setCurrentTime: (currentTime: number) => void;

  /**
   * 暂停当前播放的函数，可以记录当前播放时间以便后续恢复
   */
  pause: () => void;

  /**
   * 停止当前播放的函数，可能重置播放进度到初始状态
   */
  stop: () => void;
  constructor(
    resume: (currentTime?: number) => void,
    setCurrentTime: (currentTime: number) => void,
    pause: () => void,
    stop: () => void
  );
}
/**
 * {@link Game.GameWorld} 是引擎 API 的主要入口点。使用此对象可以控制场景的全局属性，如天气、一天中的时间等，并对存在于世界中的所有 {@link Game.GameEntity} 进行搜索。
 */
declare class GameWorld {
  /**
   * 当前运行世界公共 URL
   */
  url: URL;

  /**
   * 返回脚本允许创建的剩余实体数量
   * @category 实体
   */
  entityQuota: () => number;

  /**
   * @category 健康
   */
  onRespawn: GameEventChannel<GameRespawnEvent>;

  nextRespawn: GameEventFuture<GameRespawnEvent>;

  /**
   * 创建一个新的 {@link Game.GameEntity} 或复制一个现有实体。
   * 如果超出实体配额，则返回 null。
   * @param config 实体的初始值集或要复制的新实体
   * @returns 具有给定参数的新创建的实体
   * @category 实体
   */
  createEntity: (config: Partial<GameEntityConfig>) => GameEntity | null;

  /**
   * 可以使用类似于 jQuery 选择器的语法搜索游戏中的实体。
   * 更多示例参见 {@link Game.GameSelectorString}
   *
   * @param selector 选择器搜索模式
   * @returns 匹配选择器的第一个实体
   * @category 实体
   */
  querySelector: (selector: GameSelectorString) => GameEntity | null;

  /**
   * 可以使用类似于 jQuery 选择器的语法搜索游戏中的实体
   * 更多示例参见 {@link Game.GameSelectorString}
   *
   * @param selector 选择器搜索模式
   * @returns 所有匹配选择器的实体
   * @category 实体
   */
  querySelectorAll(selector: "player"): GamePlayerEntity[];
  querySelectorAll(selector: GameSelectorString): GameEntity[];

  /**
   * 测试实体上的选择器
   *
   * @param selector 要测试的选择器模式
   * @param entity 要测试的实体
   * @category 实体
   */
  testSelector: (selector: GameSelectorString, entity: GameEntity) => boolean;

  /**
   * 禁用所有匹配 aSelector 和 bSelector 的实体之间的碰撞
   *
   * @param aSelector 第一组实体的选择器
   * @param bSelector 第二组实体的选择器
   * @category 物理
   */
  addCollisionFilter: (
    aSelector: GameSelectorString,
    bSelector: GameSelectorString
  ) => void;

  /**
   * 移除 aSelector 和 bSelector 之间的碰撞过滤器
   *
   * @param aSelector 第一组实体的选择器
   * @param bSelector 第二组实体的选择器
   * @category 物理
   */
  removeCollisionFilter: (
    aSelector: GameSelectorString,
    bSelector: GameSelectorString
  ) => void;

  /**
   * 清除所有碰撞过滤器
   *
   * @category 物理
   */
  clearCollisionFilters: () => void;

  /**
   * 返回当前所有活动的碰撞过滤器列表
   *
   * @returns 所有当前活动的碰撞过滤器
   * @category 物理
   */
  collisionFilters: () => string[][];

  /**
   * 从 `origin` 沿 `direction` 射出一条光线
   * @param origin 光线的起点
   * @param direction 光线的方向
   * @param options 选项配置参数
   * @returns 关于射线结果的信息
   * @category 搜索
   */
  raycast: (
    origin: GameVector3,
    direction: GameVector3,
    options?: Partial<GameRaycastOptions>
  ) => GameRaycastResult;

  /**
   * 搜索包含在边界框内的所有实体
   * @param bounds 要搜索的边界框
   * @returns 包含在 `bounds` 中的所有实体
   */
  searchBox: (bounds: GameBounds3) => GameEntity[];

  /**
   * 在世界对象上播放动画
   */
  animate: (
    keyframes: Partial<GameWorldKeyframe>[],
    playbackInfo?: Partial<GameAnimationPlaybackConfig>
  ) => GameAnimation<GameWorldKeyframe, GameWorld>;

  getAnimations: () => GameAnimation<GameWorldKeyframe, GameWorld>[];

  getEntityAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[];

  getPlayerAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[];

  /**
   * 每个 tick 调用的事件处理程序
   * @category tick
   */
  onTick: GameEventChannel<GameTickEvent>;

  nextTick: GameEventFuture<GameTickEvent>;

  /**
   * 当实体受到伤害时调用
   * @category 健康
   */
  onTakeDamage: GameEventChannel<GameDamageEvent>;

  nextTakeDamage: GameEventFuture<GameDamageEvent>;

  /**
   * 当实体死亡时调用
   * @category 健康
   */
  onDie: GameEventChannel<GameDieEvent>;

  nextDie: GameEventFuture<GameDieEvent>;

  /**
   * 当玩家加入游戏时调用
   * @category 玩家
   */
  onPlayerJoin: GameEventChannel<GamePlayerEntityEvent>;

  nextPlayerJoin: GameEventFuture<GamePlayerEntityEvent>;

  /**
   * 当玩家离开游戏时调用
   * @category 玩家
   */
  onPlayerLeave: GameEventChannel<GamePlayerEntityEvent>;

  nextPlayerLeave: GameEventFuture<GamePlayerEntityEvent>;

  /**
   * 当创建实体时调用
   * @category 实体
   */
  onEntityCreate: GameEventChannel<GameEntityEvent>;

  nextEntityCreate: GameEventFuture<GameEntityEvent>;

  /**
   * 当销毁实体时调用
   * @category 聊天
   */
  onEntityDestroy: GameEventChannel<GameEntityEvent>;

  nextEntityDestroy: GameEventFuture<GameEntityEvent>;

  /**
   * 广播一条消息给所有玩家
   * @param message 要广播的文本
   * @category 玩家
   */
  say: (message: string) => void;

  /**
   * 当玩家发言时调用
   * @category 玩家
   */
  onChat: GameEventChannel<GameChatEvent>;

  nextChat: GameEventFuture<GameChatEvent>;

  /**
   * 当玩家点击对象时调用
   * @category 玩家
   */
  onClick: GameEventChannel<GameClickEvent>;

  nextClick: GameEventFuture<GameClickEvent>;

  /**
   * 当玩家按下按钮时调用
   * @category 玩家
   */
  onPress: GameEventChannel<GameInputEvent>;

  nextPress: GameEventFuture<GameInputEvent>;

  /**
   * 当玩家释放按钮时调用
   * @category 玩家
   */
  onRelease: GameEventChannel<GameInputEvent>;

  nextRelease: GameEventFuture<GameInputEvent>;

  /**
   * 当两个实体发生碰撞时调用
   * @category 实体
   */
  onEntityContact: GameEventChannel<GameEntityContactEvent>;

  nextEntityContact: GameEventFuture<GameEntityContactEvent>;

  /**
   * 当两个实体停止碰撞时调用
   * @category 实体
   */
  onEntitySeparate: GameEventChannel<GameEntityContactEvent>;

  nextEntitySeparate: GameEventFuture<GameEntityContactEvent>;

  /**
   * 当实体接触方块时调用
   * @category 实体
   */
  onVoxelContact: GameEventChannel<GameVoxelContactEvent>;

  nextVoxelContact: GameEventFuture<GameVoxelContactEvent>;

  /**
   * 当实体停止接触方块时调用
   * @category 实体
   */
  onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>;

  nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>;

  /**
   * 当实体进入流体时调用
   * @category 实体
   */
  onFluidEnter: GameEventChannel<GameFluidContactEvent>;

  nextFluidEnter: GameEventFuture<GameFluidContactEvent>;

  /**
   * 当实体离开流体时调用
   * @category 实体
   */
  onFluidLeave: GameEventChannel<GameFluidContactEvent>;

  nextFluidLeave: GameEventFuture<GameFluidContactEvent>;

  /**
   * 区域
   * @category 区域
   */
  zones: () => GameZone[];

  addZone: (config: Partial<GameZoneConfig>) => GameZone;

  removeZone: (trigger: GameZone) => void;

  /**
   * @category 互动
   */
  onInteract: GameEventChannel<GameInteractEvent>;

  nextInteract: GameEventFuture<GameInteractEvent>;

  /**
   * 当玩家购买产品成功时调用
   * @category 玩家
   */
  onPlayerPurchaseSuccess: GameEventChannel<GamePurchaseSuccessEvent>;

  nextPlayerPurchaseSuccess: GameEventFuture<GamePurchaseSuccessEvent>;

  /**
   * 在指定位置播放声音
   */
  sound: (
    spec:
      | {
          // 定义一个样本字符串，用于标识或描述某个音频样本
          sample: GameAudioAssets;

          // 可选地定义一个三维位置，表示音频在游戏世界中的位置
          position?: GameVector3;

          // 可选地定义一个半径，用于指定音频影响或听觉范围的大小
          radius?: number;

          // 可选地定义一个增益值，用于调整音频的音量
          gain?: number;

          // 可选地定义一个音调值，用于调整音频的播放速度或频率
          pitch?: number;
        }
      | GameAudioAssets
  ) => Sound;
  /**
   * 地图组内传送能力，能够令 Player 被传送到其他地图中
   */
  teleport: TeleportType;
  /**
   * 创建临时聊天频道
   */
  createTempChat: (userIds?: string[]) => Promise<string>;
  /**
   * 销毁临时聊天频道
   */
  destroyTempChat: (chatIds: string[]) => Promise<string[]>;
  /**
   * 往特定频道增加用户
   */
  addTempChatPlayer: (chatId: string, userIds: string[]) => Promise<string[]>;
  /**
   * 往特定频道删减用户
   */
  removeTempChatPlayer: (
    chatId: string,
    userIds: string[]
  ) => Promise<string[]>;
  /**
   * 读取当前地图存在的临时聊天频道
   */
  getTempChats: () => Promise<string[]>;
  /**
   * 查询特定频道内用户
   */
  getTempChatUsers: (chatId: string) => Promise<string[]>;
  /**
   * 当前服务器id
   */
  serverId: string;
  /**
   * 项目的名称（只读）
   */
  projectName: string;

  /**
   * 当前的滴答数
   * 用于记录当前的时间点或事件序列中的位置
   */
  currentTick: number;

  /**
   * 用于天空和环境光的照明类型
   */
  lightMode: "natural" | "manual";

  /**
   * 太阳在天空中的初始相位。一天中的时间通过以下公式计算：
   * `timeOfDay = (sunPhase + sunFrequency * tick) % 1`
   * @category 天气
   */
  sunPhase: number;

  /**
   * 太阳在天空中移动的频率。值越高，太阳移动越快。
   * @category 天气
   */
  sunFrequency: number;

  /**
   * 月球的相位。必须在 0 和 1 之间
   * @category 天气
   */
  lunarPhase: number;

  /**
   * 太阳的方向（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  sunDirection: GameVector3;

  /**
   * 太阳的光照强度（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  sunLight: GameRGBColor;

  /**
   * -x 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyLeftLight: GameRGBColor;

  /**
   * +x 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyRightLight: GameRGBColor;

  /**
   * -y 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyBottomLight: GameRGBColor;

  /**
   * +y 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyTopLight: GameRGBColor;

  /**
   * -z 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyFrontLight: GameRGBColor;

  /**
   * +z 方向的环境光值（仅当 ambientLightMode === 'manual' 时使用）
   * @category 天气
   */
  skyBackLight: GameRGBColor;

  /**
   * 雾的颜色
   * @category 天气
   */
  fogColor: GameRGBColor;

  /**
   * 雾开始的距离
   * @category 天气
   */
  fogStartDistance: number;

  /**
   * 雾开始的高度
   * @category 天气
   */
  fogHeightOffset: number;

  /**
   * 高度雾衰减率
   * @category 天气
   */
  fogHeightFalloff: number;

  /**
   * 均匀雾的量（如果大于 0，则看不到天空盒）
   * @category 天气
   */
  fogUniformDensity: number;

  /**
   * 最大雾量
   * @category 天气
   */
  maxFog: number;

  /**
   * 雪的密度
   * @category 天气
   */
  snowDensity: number;

  /**
   * 雪的最小尺寸
   * @category 天气
   */
  snowSizeLo: number;

  /**
   * 雪的最大尺寸
   * @category 天气
   */
  snowSizeHi: number;

  /**
   * 雪的下落速度
   * @category 天气
   */
  snowFallSpeed: number;

  /**
   * 雪的旋转速度
   * @category 天气
   */
  snowSpinSpeed: number;

  /**
   * 雪的颜色
   * @category 天气
   */
  snowColor: GameRGBAColor;

  /**
   * 雪的纹理
   * @category 天气
   */
  snowTexture: string;

  /**
   * 雨的密度
   * @category 天气
   */
  rainDensity: number;

  /**
   * 雨的方向
   * @category 天气
   */
  rainDirection: GameVector3;

  /**
   * 雨的速度
   * @category 天气
   */
  rainSpeed: number;

  /**
   * 雨的最小尺寸
   * @category 天气
   */
  rainSizeLo: number;

  /**
   * 雨的最大尺寸
   * @category 天气
   */
  rainSizeHi: number;

  /**
   * 雨的干扰程度
   * @category 天气
   */
  rainInterference: number;

  /**
   * 雨的颜色
   * @category 天气
   */
  rainColor: GameRGBAColor;

  /**
   * 引力场的量和方向
   * @category 物理
   */
  gravity: number;

  /**
   * 空气摩擦力的量
   * @category 物理
   */
  airFriction: number;

  /**
   * 使用 OBB 刚体来解决物理问题
   * @category 物理
   */
  useOBB: boolean;

  /**
   * 当方块被破坏时播放的声音
   * @category 声音
   */
  breakVoxelSound: GameSoundEffect;

  /**
   * 当方块被放置时播放的声音
   * @category 声音
   */
  placeVoxelSound: GameSoundEffect;

  /**
   * 当玩家加入时播放的声音
   * @category 声音
   */
  playerJoinSound: GameSoundEffect;

  /**
   * 当玩家离开时播放的声音
   * @category 声音
   */
  playerLeaveSound: GameSoundEffect;

  /**
   * 背景环境声音，全局播放
   * @category 声音
   */
  ambientSound: GameSoundEffect;
  /**
   * @ignore
   */
  constructor(
    /**
     * Public URL of the currently running world
     */
    url: URL,
    /**
     * Returns the remaining number of entities the script is allowed to create
     * @category entities
     */
    entityQuota: () => number,
    /**
     * @category health
     */
    onRespawn: GameEventChannel<GameRespawnEvent>,
    nextRespawn: GameEventFuture<GameRespawnEvent>,
    /**
     * Creates a new {@link Game.GameEntity} or makes a copy of an existing entity.
     * If entity quota is exceeded, then returns null.
     * @param config A set of initial values for the entity or a new entity which we want to copy
     * @returns A newly created entity with the given parameters
     * @category entity
     */
    createEntity: (config: Partial<GameEntityConfig>) => GameEntity | null,
    /**
     * The entities in game can be searched using a jQuery selector-like syntax.
     * For more examples see {@link Game.GameSelectorString}
     *
     * @param selector a selector search pattern
     * @returns the first entity which matches the selector/
     * @category entity
     */
    querySelector: (selector: GameSelectorString) => GameEntity | null,
    /**
     * The entities in game can be searched using a jQuery selector-like syntax
     * For more examples see {@link Game.GameSelectorString}
     *
     * @param selector a selector search pattern
     * @returns All entities which match the selector
     * @category entity
     */
    querySelectorAll: (selector: GameSelectorString) => GameEntity[],
    /**
     * Test a selector on an entity
     *
     * @param selector the selector pattern to test
     * @param entity The entity to test
     * @category entity
     */
    testSelector: (selector: GameSelectorString, entity: GameEntity) => boolean,
    /**
     * Disables collisions between the set of all entities matching aSelector and bSelector
     *
     * @param aSelector the selector for the first set of entities
     * @param bSelector the selector for the second set of entities
     * @category physics
     */
    addCollisionFilter: (
      aSelector: GameSelectorString,
      bSelector: GameSelectorString
    ) => void,
    /**
     * Removes collision filter between aSelector and bSelector
     *
     * @param aSelector the selector for the first set of entities
     * @param bSelector the selector for the second set of entities
     * @category physics
     */
    removeCollisionFilter: (
      aSelector: GameSelectorString,
      bSelector: GameSelectorString
    ) => void,
    /**
     * Clears all collision filters
     *
     * @category physics
     */
    clearCollisionFilters: () => void,
    /**
     * Returns a list of all currently active collision filters
     *
     * @returns All currently active collision filters
     * @category physics
     */
    collisionFilters: () => string[][],
    /**
     * Shoots a ray through the world from `origin` in `direction`
     * @param origin the start point of the ray
     * @param direction the direction of the ray
     * @param options An option configuration parameter
     * @returns Information about the resulting raycast
     * @category search
     */
    raycast: (
      origin: GameVector3,
      direction: GameVector3,
      options?: Partial<GameRaycastOptions>
    ) => GameRaycastResult,
    /**
     * Search for all entities contained in a bounding box
     * @param bounds the bounding box to search
     * @returns All entities contained in ``bounds``
     */
    searchBox: (bounds: GameBounds3) => GameEntity[],
    /**
     * Plays an animation on the world object
     */
    animate: (
      keyframes: Partial<GameWorldKeyframe>[],
      playbackInfo?: Partial<GameAnimationPlaybackConfig>
    ) => GameAnimation<GameWorldKeyframe, GameWorld>,
    getAnimations: () => GameAnimation<GameWorldKeyframe, GameWorld>[],
    getEntityAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[],
    getPlayerAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[],
    /**
     * An event handler called each tick
     * @category tick
     */
    onTick: GameEventChannel<GameTickEvent>,
    nextTick: GameEventFuture<GameTickEvent>,
    /**
     * Called when an entity takes damage
     * @category health
     */
    onTakeDamage: GameEventChannel<GameDamageEvent>,
    nextTakeDamage: GameEventFuture<GameDamageEvent>,
    /**
     * Called when an entity dies
     * @category health
     */
    onDie: GameEventChannel<GameDieEvent>,
    nextDie: GameEventFuture<GameDieEvent>,
    /**
     * Called whenever a player joins the game
     * @category player
     */
    onPlayerJoin: GameEventChannel<GamePlayerEntityEvent>,
    nextPlayerJoin: GameEventFuture<GamePlayerEntityEvent>,
    /**
     * Called whenever a player leaves the game
     * @category player
     */
    onPlayerLeave: GameEventChannel<GamePlayerEntityEvent>,
    nextPlayerLeave: GameEventFuture<GamePlayerEntityEvent>,
    /**
     * Called whenever an entity is created
     * @category entity
     */
    onEntityCreate: GameEventChannel<GameEntityEvent>,
    nextEntityCreate: GameEventFuture<GameEntityEvent>,
    /**
     * Called whenever an entity is destroyed
     * @category chat
     */
    onEntityDestroy: GameEventChannel<GameEntityEvent>,
    nextEntityDestroy: GameEventFuture<GameEntityEvent>,
    /**
     * Broadcast a global message to all players
     * @param message is some text we want to broadcast
     * @category player
     */
    say: (message: string) => void,
    /**
     * Called whenever a player says something
     * @category player
     */
    onChat: GameEventChannel<GameChatEvent>,
    nextChat: GameEventFuture<GameChatEvent>,
    /**
     * Called whenever a player clicks on an object
     * @category player
     */
    onClick: GameEventChannel<GameClickEvent>,
    nextClick: GameEventFuture<GameClickEvent>,
    /**
     * Called whenever a player pushes a button
     * @category player
     */
    onPress: GameEventChannel<GameInputEvent>,
    nextPress: GameEventFuture<GameInputEvent>,
    /**
     * Called whenever a player releases a button
     * @category player
     */
    onRelease: GameEventChannel<GameInputEvent>,
    nextRelease: GameEventFuture<GameInputEvent>,
    /**
     * Called whenever two entities collide
     * @category entity
     */
    onEntityContact: GameEventChannel<GameEntityContactEvent>,
    nextEntityContact: GameEventFuture<GameEntityContactEvent>,
    /**
     * Called whenever two entities stop colliding
     * @category entity
     */
    onEntitySeparate: GameEventChannel<GameEntityContactEvent>,
    nextEntitySeparate: GameEventFuture<GameEntityContactEvent>,
    /**
     * Called whenever an entity touches a voxel
     * @category entity
     */
    onVoxelContact: GameEventChannel<GameVoxelContactEvent>,
    nextVoxelContact: GameEventFuture<GameVoxelContactEvent>,
    /**
     * Called whenever an entity stops touching a voxel
     * @category entity
     */
    onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>,
    nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>,
    /**
     * Called when an entity enters a fluid
     * @category entity
     */
    onFluidEnter: GameEventChannel<GameFluidContactEvent>,
    nextFluidEnter: GameEventFuture<GameFluidContactEvent>,
    /**
     * Called when an entity leaves a fluid
     * @category entity
     */
    onFluidLeave: GameEventChannel<GameFluidContactEvent>,
    nextFluidLeave: GameEventFuture<GameFluidContactEvent>,
    /**
     * Zones
     * @category zone
     */
    zones: () => GameZone[],
    addZone: (config: Partial<GameZoneConfig>) => GameZone,
    removeZone: (trigger: GameZone) => void,
    /**
     * @category interactive
     */
    onInteract: GameEventChannel<GameInteractEvent>,
    nextInteract: GameEventFuture<GameInteractEvent>,
    /**
     * Called when player buy product success
     * @category player
     */
    onPlayerPurchaseSuccess: GameEventChannel<GamePurchaseSuccessEvent>,
    nextPlayerPurchaseSuccess: GameEventFuture<GamePurchaseSuccessEvent>,
    /**
     * Plays a sound at a given location
     */
    sound: (
      spec:
        | {
            sample: GameAudioAssets;
            position?: GameVector3;
            radius?: number;
            gain?: number;
            pitch?: number;
          }
        | GameAudioAssets
    ) => Sound,
    /**
     * 地图组内传送能力，能够令 Player 被传送到其他地图中
     */
    teleport: TeleportType,
    /**
     * 创建临时聊天频道
     */
    createTempChat: (userIds?: string[]) => Promise<string>,
    /**
     * 销毁临时聊天频道
     */
    destroyTempChat: (chatIds: string[]) => Promise<string[]>,
    /**
     * 往特定频道增加用户
     */
    addTempChatPlayer: (chatId: string, userIds: string[]) => Promise<string[]>,
    /**
     * 往特定频道删减用户
     */
    removeTempChatPlayer: (
      chatId: string,
      userIds: string[]
    ) => Promise<string[]>,
    /**
     * 读取当前地图存在的临时聊天频道
     */
    getTempChats: () => Promise<string[]>,
    /**
     * 查询特定频道内用户
     */
    getTempChatUsers: (chatId: string) => Promise<string[]>,
    /**
     * 当前服务器id
     */
    serverId: string
  );
}

/**
 * 方块收录最新时间：2024/10/17
 * 已收录384种方块
 */
type voxelName =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "acacia"
  | "add"
  | "air"
  | "air_duct"
  | "ampersand"
  | "asterisk"
  | "at"
  | "backslash"
  | "bamboo"
  | "barrier"
  | "bat_window"
  | "bear_footprint"
  | "biscuit"
  | "black"
  | "black_glass"
  | "blue"
  | "blue_decorative_light"
  | "blue_gift"
  | "blue_glass"
  | "blue_grass"
  | "blue_grass_all"
  | "blue_light"
  | "blue_surface_01"
  | "blue_surface_02"
  | "blueberry_juice"
  | "board0"
  | "board1"
  | "board10"
  | "board11"
  | "board12"
  | "board13"
  | "board14"
  | "board15"
  | "board2"
  | "board3"
  | "board4"
  | "board5"
  | "board6"
  | "board7"
  | "board8"
  | "board9"
  | "board_01"
  | "board_02"
  | "board_03"
  | "board_04"
  | "board_05"
  | "board_06"
  | "board_07"
  | "bookshelf"
  | "bounce_pad"
  | "bracket_close"
  | "bracket_open"
  | "brick_01"
  | "brick_02"
  | "brick_red"
  | "button"
  | "cadet_blue"
  | "candy"
  | "caret"
  | "carpet_01"
  | "carpet_02"
  | "carpet_03"
  | "carpet_04"
  | "carpet_05"
  | "carpet_06"
  | "carpet_07"
  | "carpet_08"
  | "carpet_09"
  | "carpet_10"
  | "carpet_11"
  | "carpet_12"
  | "carpet_13"
  | "coffee"
  | "coffee_gray"
  | "colon"
  | "color_glass"
  | "comma"
  | "conveyor"
  | "crane_lantern"
  | "crane_roof_01"
  | "crane_roof_02"
  | "cross_window"
  | "dark_blue_grass"
  | "dark_blue_grass_all"
  | "dark_brick_00"
  | "dark_brick_01"
  | "dark_brick_02"
  | "dark_grass"
  | "dark_grass_all"
  | "dark_grass_rock"
  | "dark_grass_sand"
  | "dark_gray"
  | "dark_orchid"
  | "dark_purple_grass"
  | "dark_purple_grass_all"
  | "dark_red"
  | "dark_red_grass"
  | "dark_red_grass_all"
  | "dark_salmon"
  | "dark_sand"
  | "dark_slate_blue"
  | "dark_stone"
  | "dark_surface"
  | "dark_volcanic_rock"
  | "dark_yellow_grass"
  | "dark_yellow_grass_all"
  | "dirt"
  | "divide"
  | "eight"
  | "equal"
  | "exclamation_mark"
  | "express_box"
  | "fan"
  | "firecracker"
  | "five"
  | "four"
  | "fu"
  | "geometric_window_01"
  | "geometric_window_02"
  | "glass"
  | "gold_trim_brick"
  | "grape_juice"
  | "grass"
  | "grass_all"
  | "grass_rock"
  | "grass_sand"
  | "greater_than"
  | "green_decorative_light"
  | "green_glass"
  | "green_leaf"
  | "green_light"
  | "greenbelt_L"
  | "greenbelt_L1"
  | "grey_stone_brick"
  | "honeycomb_01"
  | "honeycomb_02"
  | "ice"
  | "ice_brick"
  | "ice_wall"
  | "indigo_light"
  | "lab_lamp_01"
  | "lab_lamp_02"
  | "lab_lamp_03"
  | "lab_material_01"
  | "lab_material_02"
  | "lab_material_03"
  | "lab_material_04"
  | "lab_material_05"
  | "lab_material_06"
  | "lab_material_07"
  | "lab_material_08"
  | "lab_material_09"
  | "lab_material_10"
  | "lab_material_11"
  | "lab_material_12"
  | "lab_material_13"
  | "lab_material_14"
  | "lab_material_15"
  | "lab_screen"
  | "lab_wire"
  | "lantern_01"
  | "lantern_02"
  | "lava01"
  | "lava02"
  | "leaf_01"
  | "leaf_02"
  | "leaf_03"
  | "leaf_04"
  | "leaf_05"
  | "leaf_06"
  | "ledfloor01"
  | "ledfloor02"
  | "lemon"
  | "lemon_juice"
  | "less_than"
  | "light_blue_grass"
  | "light_blue_grass_all"
  | "light_dirt"
  | "light_gray"
  | "light_grey_stone_brick"
  | "light_purple_grass_"
  | "light_purple_grass_all"
  | "light_sand"
  | "light_volcanic_rock"
  | "lime_juice"
  | "macaroon"
  | "maroon"
  | "medium_gray"
  | "medium_green"
  | "medium_orchid"
  | "medium_purple"
  | "medium_spring_green"
  | "medium_violet_red"
  | "medium_yellow"
  | "milk"
  | "mint_green"
  | "mint_green_light"
  | "multiply"
  | "navajo_white"
  | "nine"
  | "olive_green"
  | "one"
  | "orange"
  | "orange_grass"
  | "orange_grass_all"
  | "orange_juice"
  | "orange_light"
  | "orange_red"
  | "palace_carving"
  | "palace_cloud"
  | "palace_eaves_01"
  | "palace_eaves_02"
  | "palace_eaves_03"
  | "palace_eaves_04"
  | "palace_eaves_05"
  | "palace_eaves_06"
  | "palace_eaves_07"
  | "palace_eaves_08"
  | "palace_floor"
  | "palace_lamp"
  | "palace_roof"
  | "palace_window"
  | "pale_green"
  | "palm"
  | "paren_close"
  | "paren_open"
  | "peach_juice"
  | "percent"
  | "period"
  | "peru"
  | "pink"
  | "pink_cake"
  | "pink_grass"
  | "pink_grass_all"
  | "pink_light"
  | "plank_01"
  | "plank_02"
  | "plank_03"
  | "plank_04"
  | "plank_05"
  | "plank_06"
  | "plank_07"
  | "polar_ice"
  | "polar_region"
  | "pound"
  | "powder_blue"
  | "pumpkin"
  | "pumpkin_lantern"
  | "purple"
  | "purple_grass"
  | "purple_grass_all"
  | "purple_surface_01"
  | "purple_surface_02"
  | "quartz_brick"
  | "question_mark"
  | "quotation_mark"
  | "rainbow_cube"
  | "red"
  | "red_brick"
  | "red_brick_floor"
  | "red_brick_wall"
  | "red_decorative_light"
  | "red_gift"
  | "red_glass"
  | "red_light"
  | "rock"
  | "roof_blue_04"
  | "roof_green"
  | "roof_grey"
  | "roof_purple"
  | "roof_red"
  | "roof_yellow"
  | "sakura_pink"
  | "sand"
  | "sand_stones"
  | "semicolon"
  | "seven"
  | "sienna"
  | "six"
  | "sky_blue"
  | "slash"
  | "snow"
  | "snow_grass"
  | "snow_land"
  | "snowflake_lamp"
  | "snowland"
  | "snowman_body"
  | "snowman_head"
  | "soy_sauce"
  | "special_grass_01"
  | "special_grass_02"
  | "special_grass_03"
  | "special_grass_04"
  | "special_grass_05"
  | "special_grass_06"
  | "special_grass_07"
  | "special_grass_08"
  | "special_grass_09"
  | "special_grass_10"
  | "special_grass_11"
  | "special_grass_12"
  | "special_grass_13"
  | "special_grass_14"
  | "special_grass_15"
  | "special_grass_16"
  | "special_land_01"
  | "special_sand_01"
  | "special_sand_02"
  | "special_sand_03"
  | "special_sand_04"
  | "special_sand_05"
  | "spiderweb"
  | "stained_glass"
  | "stainless_steel"
  | "star_lamp"
  | "stone"
  | "stone_brick_01"
  | "stone_brick_02"
  | "stone_pillar_03"
  | "stone_pillar_04"
  | "stone_pillar_05"
  | "stone_pillar_06"
  | "stone_wall"
  | "stone_wall_01"
  | "strawberry_juice"
  | "stripe_01"
  | "stripe_02"
  | "stripe_03"
  | "stripe_04"
  | "stripe_05"
  | "subtract"
  | "television"
  | "three"
  | "tilde"
  | "toolbox"
  | "traditional_window"
  | "treasure_chest"
  | "turquoise"
  | "two"
  | "warm_yellow_light"
  | "water"
  | "white"
  | "white_grass"
  | "white_light"
  | "window"
  | "windygrass"
  | "winter_leaf"
  | "withered_grass"
  | "withered_grass_land"
  | "wood"
  | "wooden_box"
  | "woodstone_12"
  | "yellow_decorative_light"
  | "yellow_grass"
  | "yellow_green"
  | "yellow_light"
  | "zero";
type voxelId =
  | 37
  | 39
  | 41
  | 43
  | 45
  | 47
  | 49
  | 51
  | 53
  | 55
  | 57
  | 59
  | 61
  | 63
  | 65
  | 67
  | 69
  | 71
  | 73
  | 75
  | 77
  | 79
  | 81
  | 83
  | 85
  | 87
  | 133
  | 3
  | 0
  | 585
  | 485
  | 487
  | 489
  | 491
  | 574
  | 650
  | 546
  | 553
  | 341
  | 175
  | 302
  | 363
  | 566
  | 557
  | 276
  | 669
  | 671
  | 291
  | 349
  | 351
  | 416
  | 433
  | 435
  | 453
  | 455
  | 457
  | 459
  | 461
  | 463
  | 465
  | 467
  | 181
  | 183
  | 309
  | 311
  | 313
  | 315
  | 635
  | 483
  | 631
  | 493
  | 495
  | 109
  | 153
  | 155
  | 587
  | 89
  | 551
  | 497
  | 195
  | 197
  | 199
  | 201
  | 203
  | 205
  | 207
  | 235
  | 237
  | 239
  | 241
  | 243
  | 245
  | 428
  | 379
  | 499
  | 501
  | 471
  | 405
  | 401
  | 403
  | 162
  | 693
  | 695
  | 329
  | 331
  | 333
  | 317
  | 745
  | 743
  | 725
  | 95
  | 369
  | 697
  | 699
  | 107
  | 685
  | 687
  | 383
  | 729
  | 113
  | 327
  | 357
  | 735
  | 689
  | 691
  | 125
  | 9
  | 33
  | 11
  | 13
  | 479
  | 589
  | 582
  | 27
  | 25
  | 577
  | 164
  | 166
  | 170
  | 151
  | 420
  | 127
  | 741
  | 739
  | 723
  | 505
  | 278
  | 424
  | 287
  | 319
  | 321
  | 149
  | 535
  | 537
  | 398
  | 145
  | 249
  | 289
  | 591
  | 593
  | 595
  | 597
  | 599
  | 601
  | 603
  | 605
  | 607
  | 609
  | 611
  | 613
  | 615
  | 617
  | 619
  | 621
  | 622
  | 624
  | 627
  | 629
  | 157
  | 159
  | 465
  | 467
  | 251
  | 253
  | 529
  | 531
  | 533
  | 633
  | 473
  | 475
  | 121
  | 418
  | 507
  | 677
  | 679
  | 737
  | 97
  | 147
  | 681
  | 683
  | 727
  | 733
  | 414
  | 339
  | 377
  | 111
  | 391
  | 371
  | 373
  | 397
  | 375
  | 389
  | 347
  | 345
  | 517
  | 93
  | 543
  | 549
  | 293
  | 665
  | 667
  | 353
  | 355
  | 155
  | 15
  | 519
  | 581
  | 105
  | 304
  | 259
  | 261
  | 570
  | 555
  | 281
  | 359
  | 231
  | 229
  | 407
  | 227
  | 225
  | 233
  | 117
  | 135
  | 731
  | 521
  | 31
  | 393
  | 29
  | 91
  | 523
  | 169
  | 653
  | 655
  | 565
  | 343
  | 559
  | 561
  | 426
  | 701
  | 703
  | 705
  | 707
  | 709
  | 711
  | 713
  | 715
  | 717
  | 719
  | 747
  | 749
  | 751
  | 753
  | 755
  | 757
  | 721
  | 759
  | 761
  | 763
  | 765
  | 767
  | 544
  | 123
  | 247
  | 562
  | 129
  | 323
  | 325
  | 267
  | 269
  | 271
  | 273
  | 275
  | 335
  | 412
  | 185
  | 187
  | 189
  | 191
  | 193
  | 5
  | 481
  | 23
  | 525
  | 647
  | 578
  | 649
  | 367
  | 21
  | 301
  | 364
  | 177
  | 539
  | 299
  | 160
  | 469
  | 527
  | 659
  | 657
  | 257
  | 179
  | 411
  | 572
  | 477
  | 101
  | 285
  | 17;
type voxelRotation = 0 | 1 | 2 | 3;

/**
 * {@link Game.GameVoxels} 提供了游戏中所有方块的接口。您可以使用它来控制地形。
 */
declare class GameVoxels {
  /**
   * 方块网格在 x/y/z 维度上的大小
   */
  shape: GameVector3;

  /**
   * 所支持的方块类型的数组
   * @category 名称
   */
  VoxelTypes: string[];

  /**
   * 根据方块的可读名称获取其 ID
   * @param name 方块的可读名称
   * @returns 方块的 ID 编号
   * @category 名称
   */
  id: (name: voxelName) => voxelId | 0;

  /**
   * 根据方块的 ID 获取其可读名称
   * @param id 方块的数字 ID
   * @returns 方块的可读名称
   * @category 名称
   */
  name: (id: voxelId) => voxelName | "";

  /**
   * 在网格中设置一个方块
   * @param voxel 方块的名称或其 ID
   * @param rotation 方块的旋转代码
   * @returns 更新后的方块 ID
   */
  setVoxel: (
    x: number,
    y: number,
    z: number,
    voxel: voxelId | voxelName,
    rotation?: voxelRotation
  ) => voxelId | 0;

  /**
   * 获取某一点处的方块类型
   * @returns 点 x/y/z 处的方块类型代码
   */
  getVoxel: (x: number, y: number, z: number) => voxelId | 0;

  /**
   * 获取某一点处的方块旋转代码
   * @returns 点 x/y/z 处的方块旋转代码
   */
  getVoxelRotation: (x: number, y: number, z: number) => voxelRotation;

  /**
   * 使用方块的 ID 代码直接在网格中设置一个方块
   * @category 高级
   */
  setVoxelId: (x: number, y: number, z: number, voxel: voxelId) => voxelId | 0;

  /**
   * 在网格中检索方块的 ID
   * @category 高级
   */
  getVoxelId: (x: number, y: number, z: number) => voxelId | 0;

  /**
   * @ignore
   */
  constructor(
    /**
     * 方块网格在 x/y/z 维度上的大小
     */
    shape: GameVector3,
    /**
     * 所支持的方块类型的数组
     * @category 名称
     */
    VoxelTypes: string[],
    /**
     * 根据方块的可读名称获取其 ID
     * @param name 方块的可读名称
     * @returns 方块的 ID 编号
     * @category 名称
     */
    id: (name: string) => number,
    /**
     * 根据方块的 ID 获取其可读名称
     * @param id 方块的数字 ID
     * @returns 方块的可读名称
     * @category 名称
     */
    name: (id: number) => string,
    /**
     * 在网格中设置一个方块
     * @param voxel 方块的名称或其 ID
     * @param rotation 方块的旋转代码
     * @returns 更新后的方块 ID
     */
    setVoxel: (
      x: number,
      y: number,
      z: number,
      voxel: number | string,
      rotation?: number | string
    ) => number,
    /**
     * 获取某一点处的方块类型
     * @returns 点 x/y/z 处的方块类型代码
     */
    getVoxel: (x: number, y: number, z: number) => number,
    /**
     * 获取某一点处的方块旋转
     * @returns 点 x/y/z 处的方块旋转代码
     */
    getVoxelRotation: (x: number, y: number, z: number) => number,
    /**
     * 使用方块的 ID 代码直接在网格中设置一个方块
     * @category 高级
     */
    setVoxelId: (x: number, y: number, z: number, voxel: number) => number,
    /**
     * 在网格中检索方块的 ID
     * @category 高级
     */
    getVoxelId: (x: number, y: number, z: number) => number
  );
}
declare type GamePlayerEntity = GameEntity & {
  player: GamePlayer;
  isPlayer: true;
};
declare type GamePlayerEntityEvent = GameEntityEvent & {
  entity: GamePlayerEntity;
};

/**
 * 定义游戏实体的配置接口
 */
interface GameEntityConfig {
  /**
   * 实体的位置
   */
  position: GameVector3;

  /**
   * 实体的速度
   */
  velocity: GameVector3;

  /**
   * 实体的边界
   */
  bounds: GameVector3;

  /**
   * 实体的质量
   */
  mass: number;

  /**
   * 实体的摩擦力
   */
  friction: number;

  /**
   * 实体的恢复系数
   */
  restitution: number;

  /**
   * 实体是否可以碰撞
   */
  collides: boolean;

  /**
   * 实体是否固定
   */
  fixed: boolean;

  /**
   * 实体是否受重力影响
   */
  gravity: boolean;

  /**
   * 实体的网格模型
   */
  mesh: GameModelAssets | "";

  /**
   * 实体的网格颜色
   */
  meshColor: GameRGBAColor;

  /**
   * 实体的网格缩放
   */
  meshScale: GameVector3;

  /**
   * 实体的网格朝向
   */
  meshOrientation: GameQuaternion;

  /**
   * 实体的网格金属度
   */
  meshMetalness: number;

  /**
   * 实体的网格发光强度
   */
  meshEmissive: number;

  /**
   * 实体的网格光泽度
   */
  meshShininess: number;

  /**
   * 实体几何中心与锚点的偏移量
   */
  anchorOffset: GameVector3;

  /**
   * 实体的粒子发射速率
   */
  particleRate: number;

  /**
   * 实体的粒子发射速率的随机范围
   */
  particleRateSpread: number;

  /**
   * 实体的粒子数量上限
   */
  particleLimit: number;

  /**
   * 实体的粒子颜色数组
   */
  particleColor: GameRGBColor[];

  /**
   * 实体的粒子大小数组
   */
  particleSize: number[];

  /**
   * 实体的粒子大小的随机范围
   */
  particleSizeSpread: number;

  /**
   * 实体的粒子生命周期
   */
  particleLifetime: number;

  /**
   * 实体的粒子生命周期的随机范围
   */
  particleLifetimeSpread: number;

  /**
   * 实体的粒子初速度
   */
  particleVelocity: GameVector3;

  /**
   * 实体的粒子初速度的随机范围
   */
  particleVelocitySpread: GameVector3;

  /**
   * 实体的粒子阻尼
   */
  particleDamping: number;

  /**
   * 实体的粒子加速度
   */
  particleAcceleration: GameVector3;

  /**
   * 实体的粒子噪声强度
   */
  particleNoise: number;

  /**
   * 实体的粒子噪声频率
   */
  particleNoiseFrequency: number;

  /**
   * 实体的粒子目标
   */
  particleTarget: GameEntity | null;

  /**
   * 实体的粒子目标权重
   */
  particleTargetWeight: number;

  /**
   * 实体是否可以交互
   */
  enableInteract: boolean;

  /**
   * 实体的交互颜色
   */
  interactColor: GameRGBColor;

  /**
   * 实体的交互提示文本
   */
  interactHint: string;

  /**
   * 实体的交互半径
   */
  interactRadius: number;

  /**
   * 实体受伤时的声音配置
   */
  hurtSound: GameSoundEffectConfig;

  /**
   * 实体死亡时的声音配置
   */
  dieSound: GameSoundEffectConfig;

  /**
   * 实体交互时的声音配置
   */
  interactSound: GameSoundEffectConfig;

  /**
   * 实体聊天时的声音配置
   */
  chatSound: GameSoundEffectConfig;

  /**
   * 实体的唯一标识符
   */
  id: string;

  /**
   * 实体的标签，可以是返回字符串数组的函数或字符串数组
   */
  tags: (() => string[]) | string[];
}

/**
 * 定义游戏实体受伤选项的接口
 */
interface GameHurtOptions {
  // 伤害来源的实体
  attacker: GameEntity;
  // 伤害类型
  damageType: string;
}

/**
 * 定义游戏实体关键帧的接口
 */
interface GameEntityKeyframe {
  // 关键帧的持续时间
  duration: number;
  // 关键帧的加速方式
  easeIn: GameEasing;
  // 关键帧的减速方式
  easeOut: GameEasing;
  // 实体的位置
  position: GameVector3;
  // 实体的速度
  velocity: GameVector3;
  // 实体的质量
  mass: number;
  // 实体的摩擦力
  friction: number;
  // 实体的恢复系数
  restitution: number;
  // 实体是否可以碰撞
  collides: boolean;
  // 实体是否固定
  fixed: boolean;
  // 实体是否受重力影响
  gravity: boolean;
  // 实体的网格模型
  mesh: GameModelAssets | "";
  // 实体的网格是否不可见
  meshInvisible: boolean;
  // 实体的网格缩放
  meshScale: GameVector3;
  // 实体的网格朝向
  meshOrientation: GameQuaternion;
  // 实体的网格偏移
  meshOffset: GameVector3;
  // 实体的网格颜色
  meshColor: GameRGBAColor;
  // 实体的网格金属度
  meshMetalness: number;
  // 实体的网格发光强度
  meshEmissive: number;
  // 实体的网格光泽度
  meshShininess: number;
  // 实体的粒子发射速率
  particleRate: number;
  // 实体的粒子发射速率的随机范围
  particleRateSpread: number;
  // 实体的粒子数量上限
  particleLimit: number;
  // 实体的粒子生命周期
  particleLifetime: number;
  // 实体的粒子生命周期的随机范围
  particleLifetimeSpread: number;
  // 实体的粒子初速度
  particleVelocity: GameVector3;
  // 实体的粒子初速度的随机范围
  particleVelocitySpread: GameVector3;
  // 实体的粒子颜色数组
  particleColor: GameRGBColor[];
  // 实体的粒子大小数组
  particleSize: number[];
  // 实体的粒子大小的随机范围
  particleSizeSpread: number;
  // 实体的粒子阻尼
  particleDamping: number;
  // 实体的粒子加速度
  particleAcceleration: GameVector3;
  // 实体的粒子噪声强度
  particleNoise: number;
  // 实体的粒子噪声频率
  particleNoiseFrequency: number;
  // 实体的粒子目标
  particleTarget: GameEntity | null;
  // 实体的粒子目标权重
  particleTargetWeight: number;
  // 实体的交互颜色
  interactColor: GameRGBColor;
}
/**
 * 实体是游戏中的游戏对象，可以用来表示玩家、物体等。
 */
declare class GameEntity implements GameEntityConfig {
  /**
   * 获取分配给实体的所有标签集合
   * @category selectors
   */
  tags: () => string[];

  /**
   * 向实体添加新标签
   * @category selectors
   */
  addTag: (tag: string) => void;

  /**
   * 从实体中移除标签
   * @category selectors
   */
  removeTag: (tag: string) => void;

  /**
   * 测试实体是否具有某个标签
   * @category selectors
   */
  hasTag: (tag: string) => boolean;

  /**
   * 销毁实体
   * @category destroy
   */
  destroy: () => void;

  /**
   * 当实体被销毁时调用
   * @category destroy
   */
  onDestroy: GameEventChannel<GameEntityEvent>;

  /**
   * 下一次实体被销毁时的未来事件
   */
  nextDestroy: GameEventFuture<GameEntityEvent>;

  /**
   * 当实体受到伤害时调用
   * @category health
   */
  onTakeDamage: GameEventChannel<GameDamageEvent>;

  /**
   * 下一次实体受到伤害时的未来事件
   */
  nextTakeDamage: GameEventFuture<GameDamageEvent>;

  /**
   * 当实体死亡时调用
   * @category health
   */
  onDie: GameEventChannel<GameDieEvent>;

  /**
   * 下一次实体死亡时的未来事件
   */
  nextDie: GameEventFuture<GameDieEvent>;

  /**
   * 对实体造成伤害
   * @category health
   */
  hurt: (amount: number, options?: Partial<GameHurtOptions>) => void;

  /**
   * 使实体说话
   * @category chat
   */
  say: (
    message: string,
    options?: Partial<{
      /**
       * 气泡及广播提示语的持续时间（ms)
       * - 缺省值：2000
       */
      duration: number;
      /**
       * 气泡内容是否在世界广播上隐藏？
       * - 缺省值：false
       */
      hideFloat: boolean;
    }>
  ) => void;

  /**
   * 在实体上播放动画
   */
  animate: (
    keyframes: Partial<GameEntityKeyframe>[],
    playbackInfo?: Partial<GameAnimationPlaybackConfig>
  ) => GameAnimation<GameEntityKeyframe, GameEntity>;

  /**
   * 获取实体当前播放的所有动画
   */
  getAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[];

  /**
   * 当玩家点击此实体时调用
   */
  onClick: GameEventChannel<GameClickEvent>;

  /**
   * 下一次玩家点击此实体时的未来事件
   */
  nextClick: GameEventFuture<GameClickEvent>;

  /**
   * 当实体接触另一个实体时调用
   * @category physics
   */
  onEntityContact: GameEventChannel<GameEntityContactEvent>;

  /**
   * 下一次实体接触另一个实体时的未来事件
   */
  nextEntityContact: GameEventFuture<GameEntityContactEvent>;

  /**
   * 当实体停止接触另一个实体时调用
   * @category physics
   */
  onEntitySeparate: GameEventChannel<GameEntityContactEvent>;

  /**
   * 下一次实体停止接触另一个实体时的未来事件
   */
  nextEntitySeparate: GameEventFuture<GameEntityContactEvent>;

  /**
   * 当实体接触方块时调用
   * @category physics
   */
  onVoxelContact: GameEventChannel<GameVoxelContactEvent>;

  /**
   * 下一次实体接触方块时的未来事件
   */
  nextVoxelContact: GameEventFuture<GameVoxelContactEvent>;

  /**
   * 当实体停止接触方块时调用
   * @category physics
   */
  onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>;

  /**
   * 下一次实体停止接触方块时的未来事件
   */
  nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>;

  /**
   * 当实体进入流体时调用
   * @category physics
   */
  onFluidEnter: GameEventChannel<GameFluidContactEvent>;

  /**
   * 下一次实体进入流体时的未来事件
   */
  nextFluidEnter: GameEventFuture<GameFluidContactEvent>;

  /**
   * 当实体离开流体时调用
   * @category physics
   */
  onFluidLeave: GameEventChannel<GameFluidContactEvent>;

  /**
   * 下一次实体离开流体时的未来事件
   */
  nextFluidLeave: GameEventFuture<GameFluidContactEvent>;

  /**
   * 当实体与另一个实体互动时调用
   * @category interactive
   */
  onInteract: GameEventChannel<GameInteractEvent>;

  /**
   * 下一次实体与另一个实体互动时的未来事件
   */
  nextInteract: GameEventFuture<GameInteractEvent>;

  /**
   * 在实体位置播放音效
   * @category sound
   */
  sound: (
    spec:
      | {
          sample: GameAudioAssets;
          radius?: number;
          pitch?: number;
          gain?: number;
        }
      | GameAudioAssets
  ) => Sound;

  /**
   * 运动控制器
   * @category motion
   */
  motion: GameMotionController<GameEntity>;

  /**
   * 使实体朝向指定位置
   * @category mesh
   */
  lookAt: (
    targetPosition: GameVector3,
    facingDirection?: "X" | "Y" | "Z",
    up?: GameVector3
  ) => void;

  /**
   * 围绕模型自身坐标系下的某个点进行旋转
   * @param localPosition - 一个包含x、y、z坐标的三维向量，表示待旋转的位置
   * @param axis - 一个字符串，指定旋转轴可以是'X'、'Y'或'Z'
   * @param rad - 旋转的角度，以弧度为单位
   * @category mesh
   */
  rotateLocal: (
    localPosition: GameVector3,
    axis: "X" | "Y" | "Z",
    rad: number
  ) => void;

  /**
   * 参照模型自身坐标系下的某个点进行缩放
   * @param localPosition - 本地坐标系中的位置向量，表示待缩放的点
   * @param v - 缩放向量，表示在x、y、z轴上的缩放因子
   * @category mesh
   */
  scaleLocal: (localPosition: GameVector3, v: GameVector3) => void;

  /**
   * 实体在编辑器中的种子名称
   * @category selectors
   */
  id: string;

  /**
   * 如果为 true，表示实体已被销毁
   * @category destroy
   */
  destroyed: boolean;

  /**
   * 实体的位置
   * @category physics
   */
  position: GameVector3;

  /**
   * 实体的速度
   * @category physics
   */
  velocity: GameVector3;

  /**
   * 实体边界框在 x/y/z 轴上的半径
   * @category physics
   */
  bounds: GameVector3;

  /**
   * 实体的质量
   * @category physics
   */
  mass: number;

  /**
   * 控制物体的粘性（0 = 滑，1 = 粘）
   * @category physics
   */
  friction: number;

  /**
   * 控制弹跳性（0 = 软，1 = 弹）
   * @category physics
   */
  restitution: number;

  /**
   * 如果为 false，物体不会发生碰撞
   * @category physics
   */
  collides: boolean;

  /**
   * 如果为 false，物体不会受到重力影响
   * @category physics
   */
  gravity: boolean;

  /**
   * 如果为 true，物体不会移动
   * @category physics
   */
  fixed: boolean;

  /**
   * 应用于此对象的净接触力
   * @category physics
   */
  contactForce: GameVector3;

  /**
   * 返回所有活动的实体接触列表
   * @category physics
   */
  entityContacts: GameEntityContact[];

  /**
   * 返回所有活动的方块接触列表
   * @category physics
   */
  voxelContacts: GameVoxelContact[];

  /**
   * 返回所有活动的流体接触列表
   * @category physics
   */
  fluidContacts: GameFluidContact[];

  /**
   * 实体网格的哈希值。如果设置为空字符串，则实体没有网格。
   * 除非对象是玩家，否则如果设置了网格，则使用网格来计算对象的边界
   * @category mesh
   */
  mesh: GameModelAssets | "";

  /**
   * 使网格不可见
   * @category mesh
   */
  meshInvisible: boolean;

  /**
   * 网格缩放
   * @category mesh
   */
  meshScale: GameVector3;

  /**
   * 网格方向
   * @category mesh
   */
  meshOrientation: GameQuaternion;

  /**
   * 网格偏移
   * @category mesh
   */
  meshOffset: GameVector3;

  /**
   * 网格颜色
   * @category mesh
   */
  meshColor: GameRGBAColor;

  /**
   * 网格金属度
   * @category mesh
   */
  meshMetalness: number;

  /**
   * 网格发光度
   * @category mesh
   */
  meshEmissive: number;

  /**
   * 网格光泽度
   * @category mesh
   */
  meshShininess: number;

  /**
   * 几何中心与锚点的偏移量
   * @category mesh
   */
  anchorOffset: GameVector3;

  /**
   * 是否启用伤害
   * @category health
   */
  enableDamage: boolean;

  /**
   * 是否显示生命条
   * @category health
   */
  showHealthBar: boolean;

  /**
   * 当前生命值
   * @category health
   */
  hp: number;

  /**
   * 最大生命值
   * @category health
   */
  maxHp: number;

  /**
   * 如果为 true，则该实体是玩家
   * @category player
   */
  isPlayer: boolean;

  /**
   * 所有特定于玩家的状态和方法的引用
   * @category player
   */
  player?: GamePlayer;

  /**
   * 粒子发射速率（每秒粒子数）
   * @category particle
   */
  particleRate: number;

  /**
   * 粒子发射的变化范围
   * @category particle
   */
  particleRateSpread: number;

  /**
   * 该实体可以发射的最大粒子数
   * @category particle
   */
  particleLimit: number;

  /**
   * 粒子颜色样条曲线。最多 5 个条目，粒子在其生命周期内沿这 5 个点插值颜色。
   * 颜色是发光值，可以在 0 到 256 之间取任何值
   * @category particle
   */
  particleColor: GameRGBColor[];

  /**
   * 粒子大小样条曲线。最多 5 个条目，粒子在其生命周期内沿这 5 个点插值大小
   * @category particle
   */
  particleSize: number[];

  /**
   * 粒子大小分布
   * @category particle
   */
  particleSizeSpread: number;

  /**
   * 控制每个粒子的生命周期（以秒为单位）
   * @category particle
   */
  particleLifetime: number;

  /**
   * 粒子生命周期的变化范围（以秒为单位）
   * @category particle
   */
  particleLifetimeSpread: number;

  /**
   * 粒子速度偏置。单位是方块/滴答
   * @category particle
   */
  particleVelocity: GameVector3;

  /**
   * 粒子速度随机化范围。单位是方块/滴答
   * @category particle
   */
  particleVelocitySpread: GameVector3;

  /**
   * 粒子阻尼指数。
   * 0 = 无阻尼
   * 正值减慢粒子
   * 负值加速粒子
   * @category particle
   */
  particleDamping: number;

  /**
   * 粒子加速度/重力力矢量
   * 单位是方块/(滴答^2)
   * @category particle
   */
  particleAcceleration: GameVector3;

  /**
   * 粒子噪声幅度。影响粒子运动
   * @category particle
   */
  particleNoise: number;

  /**
   * 粒子噪声频率。增加噪声偏置的运动速率
   * @category particle
   */
  particleNoiseFrequency: number;

  /**
   * 粒子目标实体
   * @category particle
   */
  particleTarget: GameEntity | null;

  /**
   * 粒子目标权重
   * @category particle
   */
  particleTargetWeight: number;

  /**
   * 启用交互
   * @category interact
   */
  enableInteract: boolean;

  /**
   * 交互提示文本的颜色
   * @category interact
   */
  interactColor: GameRGBColor;

  /**
   * 交互实体的提示文本
   * @category interact
   */
  interactHint: string;

  /**
   * 交互的半径范围
   * @category interact
   */
  interactRadius: number;

  /**
   * 显示实体名称
   * @category entityName
   */
  showEntityName: boolean;

  /**
   * 实体名称
   * @category entityName
   */
  customName: string;

  /**
   * 显示实体名称的半径范围
   * @category entityName
   */
  nameRadius: number;

  /**
   * 实体名称的颜色
   * @category entityName
   */
  nameColor: GameRGBColor;

  /**
   * 当实体聊天时播放的声音
   * @category sound
   */
  chatSound: GameSoundEffect;

  /**
   * 当实体受到伤害时播放的声音
   * @category sound
   */
  hurtSound: GameSoundEffect;

  /**
   * 当实体死亡时播放的声音
   * @category sound
   */
  dieSound: GameSoundEffect;

  /**
   * 当实体被交互时播放的声音
   * @category sound
   */
  interactSound: GameSoundEffect;
  /**
   * @ignore
   */
  constructor(
    /**
     * Set of all tags assigned to the entity in the editor
     * @category selectors
     */
    tags: () => string[],
    /**
     * Adds a new tag to the entity
     * @category selectors
     */
    addTag: (tag: string) => void,
    /**
     * Removes a tag from the entity
     * @category selectors
     */
    removeTag: (tag: string) => void,
    /**
     * Tests if an entity has a tag
     * @category selectors
     */
    hasTag: (tag: string) => boolean,
    /**
     * Destroys the entity
     * @category destroy
     */
    destroy: () => void,
    /**
     * Called when the entity is destroyed
     * @category destroy
     */
    onDestroy: GameEventChannel<GameEntityEvent>,
    nextDestroy: GameEventFuture<GameEntityEvent>,
    /**
     * Called when entity takes damage
     * @category health
     */
    onTakeDamage: GameEventChannel<GameDamageEvent>,
    nextTakeDamage: GameEventFuture<GameDamageEvent>,
    /**
     * Called when an entity dies
     * @category health
     */
    onDie: GameEventChannel<GameDieEvent>,
    nextDie: GameEventFuture<GameDieEvent>,
    /**
     * Deals damage to an entity
     * @category health
     */
    hurt: (amount: number, options?: Partial<GameHurtOptions>) => void,
    /**
     * Makes the entity talk
     * @category chat
     */
    say: (message: string) => void,
    /**
     * Plays an animation on an entity
     */
    animate: (
      keyframes: Partial<GameEntityKeyframe>[],
      playbackInfo?: Partial<GameAnimationPlaybackConfig>
    ) => GameAnimation<GameEntityKeyframe, GameEntity>,
    getAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[],
    /**
     * Called whenever a player clicks on this entity
     */
    onClick: GameEventChannel<GameClickEvent>,
    nextClick: GameEventFuture<GameClickEvent>,
    /**
     * Called when the entity touches another entity
     * @category physics
     */
    onEntityContact: GameEventChannel<GameEntityContactEvent>,
    nextEntityContact: GameEventFuture<GameEntityContactEvent>,
    /**
     * Called when the entity stops touching another entity
     * @category physics
     */
    onEntitySeparate: GameEventChannel<GameEntityContactEvent>,
    nextEntitySeparate: GameEventFuture<GameEntityContactEvent>,
    /**
     * Called when the entity touches a voxel
     * @category physics
     */
    onVoxelContact: GameEventChannel<GameVoxelContactEvent>,
    nextVoxelContact: GameEventFuture<GameVoxelContactEvent>,
    /**
     * Called when the entity stops touching a voxel
     * @category physics
     */
    onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>,
    nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>,
    /**
     * Called when the entity enters a fluid
     * @category physics
     */
    onFluidEnter: GameEventChannel<GameFluidContactEvent>,
    nextFluidEnter: GameEventFuture<GameFluidContactEvent>,
    /**
     * Called when the entity leaves a fluid
     * @category physics
     */
    onFluidLeave: GameEventChannel<GameFluidContactEvent>,
    nextFluidLeave: GameEventFuture<GameFluidContactEvent>,
    /**
     * Called when an entity interact with another entity
     * @category interactive
     */
    onInteract: GameEventChannel<GameInteractEvent>,
    nextInteract: GameEventFuture<GameInteractEvent>,
    /**
     * Play a sound effect at the location of this entity
     * @category sound
     */
    sound: (
      spec:
        | {
            sample: GameAudioAssets;
            radius?: number;
            pitch?: number;
            gain?: number;
          }
        | GameAudioAssets
    ) => Sound,
    /**
     * motion controller
     * @category motion
     */
    motion: GameMotionController<GameEntity>,
    lookAt: (
      targetPosition: GameVector3,
      facingDirection?: "X" | "Y" | "Z",
      up?: GameVector3
    ) => void
  );
}
/**
 * 定义游戏动作配置接口
 * 用于描述单个游戏动作的名称和迭代次数
 */
interface GameMotionConfig {
  name: string; // 动作的名称
  iterations: number; // 动作的迭代次数
}

/**
 * 定义游戏动作集配置接口
 * 用于描述一组游戏动作及其整体的迭代次数
 */
interface GameMotionClipConfig {
  motions: GameMotionConfig[]; // 动作集，包含多个GameMotionConfig
  iterations: number; // 整组动作的迭代次数
}
declare class GameMotionController<TargetType> {
  /**
   * 通过名称（可以是动作列表）创建动作处理器
   * @param config 动作配置，可以是字符串、动作配置数组或单个动作剪辑配置
   * @returns 返回一个 `GameMotionHandler` 实例，用于处理指定的动作
   */
  loadByName: (
    config: string | GameMotionConfig[] | GameMotionClipConfig
  ) => GameMotionHandler<TargetType>;

  /**
   * 暂停当前动作
   */
  pause: () => void;

  /**
   * 恢复暂停的动作
   */
  resume: () => void;

  /**
   * 通过名称设置默认动作
   * @param motionName 动作名称，可选参数
   */
  setDefaultMotionByName: (motionName?: string) => void;

  /**
   * @ignore
   */
  constructor(
    loadByName: (
      config: string | GameMotionConfig[] | GameMotionClipConfig
    ) => GameMotionHandler<TargetType>,
    pause: () => void,
    resume: () => void,
    setDefaultMotionByName: (motionName?: string) => void
  );
}

declare class GameMotionHandler<TargetType> {
  /**
   * 动作目标对象（实体）
   */
  readonly target: TargetType;

  /**
   * 开始播放动作
   */
  play: () => void;

  /**
   * 取消当前动作播放
   */
  cancel: () => void;

  /**
   * 当动作成功完成时触发的事件
   */
  onFinish: GameEventChannel<GameMotionEvent<TargetType>>;

  /**
   * 下一次动作完成时的未来事件
   */
  nextFinish: GameEventFuture<GameMotionEvent<TargetType>>;

  /**
   * @ignore
   */
  constructor(
    target: TargetType,
    play: () => void,
    cancel: () => void,
    onFinish: GameEventChannel<GameMotionEvent<TargetType>>,
    nextFinish: GameEventFuture<GameMotionEvent<TargetType>>
  );
}
/**
 * 表示与游戏动作相关的事件，携带有关目标和事件状态的信息
 */
declare class GameMotionEvent<TargetType> {
  /**
   * 发生点击事件的刻度
   */
  tick: number;
  /**
   * 只读属性，表示事件的目标对象
   */
  readonly target: TargetType;
  /**
   * 动作事件处理程序，特定于目标对象
   */
  motionHandler: GameMotionHandler<TargetType>;
  /**
   * 表示事件是否被取消
   */
  cancelled: boolean;
  /**
   * GameMotionEvent 的构造函数
   * @param tick 发生点击事件的刻度
   * @param target 事件的目标对象
   * @param motionHandler 动作事件处理程序，特定于目标对象
   * @param cancelled 表示事件是否被取消
   */
  constructor(
    tick: number,
    target: TargetType,
    motionHandler: GameMotionHandler<TargetType>,
    cancelled: boolean
  );
}
/**
 * 活跃实体对接触
 */
declare class GameEntityContact {
  /**
   * 接触的另一个实体
   */
  other: GameEntity;
  /**
   * 接触力
   */
  force: GameVector3;
  /**
   * 接触轴
   */
  axis: GameVector3;
  /**
   * GameEntityContact 的构造函数
   * @param other 接触的另一个实体
   * @param force 接触力
   * @param axis 接触轴
   */
  constructor(other: GameEntity, force: GameVector3, axis: GameVector3);
}

/**
 * 活跃方块接触状态
 */
declare class GameVoxelContact {
  /**
   * 方块的 X 坐标
   */
  x: number;
  /**
   * 方块的 Y 坐标
   */
  y: number;
  /**
   * 方块的 Z 坐标
   */
  z: number;
  /**
   * 方块编号
   */
  voxel: voxelId;
  /**
   * 接触力
   */
  force: GameVector3;
  /**
   * 接触轴
   */
  axis: GameVector3;
  /**
   * GameVoxelContact 的构造函数
   * @param x 方块的 X 坐标
   * @param y 方块的 Y 坐标
   * @param z 方块的 Z 坐标
   * @param voxel 方块编号
   * @param force 接触力
   * @param axis 接触轴
   */
  constructor(
    x: number,
    y: number,
    z: number,
    voxel: number,
    force: GameVector3,
    axis: GameVector3
  );
}

/**
 * 活跃流体接触
 */
declare class GameFluidContact {
  /**
   * 方块编号
   */
  voxel: voxelId;
  /**
   * 流体体积
   */
  volume: number;
  /**
   * GameFluidContact 的构造函数
   * @param voxel 方块编号
   * @param volume 流体体积
   */
  constructor(voxel: number, volume: number);
}
/**
 * Player movement state
 */
declare enum GamePlayerMoveState {
  FLYING = "fly",
  GROUND = "ground",
  SWIM = "swim",
  FALL = "fall",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2",
}
/**
 * Player walking state
 */
declare enum GamePlayerWalkState {
  NONE = "",
  CROUCH = "crouch",
  WALK = "walk",
  RUN = "run",
}
declare enum GameBodyPart {
  HIPS = "hips",
  TORSO = "torso",
  NECK = "neck",
  HEAD = "head",
  LEFT_SHOULDER = "leftShoulder",
  LEFT_UPPER_ARM = "leftUpperArm",
  LEFT_LOWER_ARM = "leftLowerArm",
  LEFT_HAND = "leftHand",
  LEFT_UPPER_LEG = "leftUpperLeg",
  LEFT_LOWER_LEG = "leftLowerLeg",
  LEFT_FOOT = "leftFoot",
  RIGHT_SHOULDER = "rightShoulder",
  RIGHT_UPPER_ARM = "rightUpperArm",
  RIGHT_LOWER_ARM = "rightLowerArm",
  RIGHT_HAND = "rightHand",
  RIGHT_UPPER_LEG = "rightUpperLeg",
  RIGHT_LOWER_LEG = "rightLowerLeg",
  RIGHT_FOOT = "rightFoot",
}
declare type GameSkinValue = string | undefined | null;
declare type GameSkin = {
  [key in GameBodyPart]: GameSkinValue;
};
declare type GameSkinInvisible = {
  [key in GameBodyPart]: boolean;
};
/**
 * 定义游戏可穿戴物品的规格接口
 * 该接口用于描述游戏中的可穿戴物品的各种属性，以便在游戏环境中准确地呈现这些物品
 */
interface GameWearableSpec {
  // 身体部位，表示该可穿戴物品所对应的穿戴位置
  bodyPart: GameBodyPart;
  // 网格模型路径，用于指定该物品的3D模型
  mesh: GameModelAssets | "";
  // 颜色，表示该物品在游戏中的显示颜色
  color: GameRGBColor;
  // 发光强度，用于控制物品的自发光效果，使其在特定条件下更加显眼
  emissive: number;
  // 金属度，用于控制物品的金属质感，影响光照下的反射和折射效果
  metalness: number;
  // 光泽度，用于控制物品表面的光滑程度，影响光线的反射效果
  shininess: number;
  // 朝向，表示物品在空间中的旋转状态，用于确保物品正确地面向玩家或指定方向
  orientation: GameQuaternion;
  // 缩放，用于控制物品的大小，允许在不同情境下调整物品的视觉大小
  scale: GameVector3;
  // 偏移，表示物品相对于默认位置的移动距离，用于精确定位物品在游戏世界中的位置
  offset: GameVector3;
}
declare class GameWearable implements GameWearableSpec {
  /**
   * 此可穿戴装备所附着的玩家
   */
  player: GamePlayer | null;
  /**
   * 此可穿戴装备所附着的身体部位
   */
  bodyPart: GameBodyPart;
  /**
   * 此可穿戴装备的网格模型
   */
  mesh: GameModelAssets | "";
  /**
   * 可穿戴装备的可选颜色调整
   */
  color: GameRGBColor;
  /**
   * 可穿戴装备的发光度调整
   */
  emissive: number;
  /**
   * 可穿戴装备的金属度调整
   */
  metalness: number;
  /**
   * 可穿戴装备的光泽度调整
   */
  shininess: number;
  /**
   * 可穿戴装备的方向
   */
  orientation: GameQuaternion;
  /**
   * 可穿戴装备在x/y/z轴上的缩放
   */
  scale: GameVector3;
  /**
   * 可穿戴装备的位置偏移
   */
  offset: GameVector3;
  /**
   * 移除此可穿戴装备
   */
  remove(): void;
}
/**
 * 定义游戏对话的类型。
 *
 * GameDialogType 枚举列出了游戏中对话类型：
 * - `TEXT` —— 文本
 * - `SELECT` —— 选择
 * - `INPUT` —— 输入
 */
declare enum GameDialogType {
  TEXT = "text",
  SELECT = "select",
  INPUT = "input",
}
/**
 * 表示游戏中对话框的选择响应。
 */
declare type GameDialogSelectResponse = {
  // 选中选项的索引号。
  index: number;
  // 选中选项的字符串值。
  value: string;
};
declare type GameDialogResponse = GameDialogSelectResponse | string | null;
/**
 * 对话框参数类型定义
 */
declare type GameDialogParams = {
  /**
   * 对话框类型
   */
  type: GameDialogType;
  /**
   * 对话框标题
   */
  title?: string;
  /**
   * 对话框内容
   */
  content: string;
  /**
   * 对话框标题背景色
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * 对话框标题文字颜色
   */
  titleTextColor?: GameRGBAColor;
  /**
   * 对话框背景色
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * 对话框文字颜色
   */
  contentTextColor?: GameRGBAColor;
  /**
   * 文本对话框是否显示箭头
   */
  hasArrow?: boolean;
  /**
   * 选择对话框的选项列表
   */
  options?: string[];
  /**
   * 输入对话框的默认输入文本
   */
  placeholder?: string;
  /**
   * 输入对话框的确认按钮文本
   */
  confirmText?: string;
  /**
   * 对象的目标点
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * 如果目标实体已给出，则为目标实体的偏移量
   */
  lookTargetOffset?: GameVector3;
  /**
   * 相机上方向量
   */
  lookUp?: GameVector3;
  /**
   * 相机眼位置
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * 如果相机眼位置是实体，则为实体位置的偏移量
   */
  lookEyeOffset?: GameVector3;
};
/**
 * 游戏文本对话框参数类型定义
 */
declare type GameTextDialogParams = {
  type: GameDialogType.TEXT;
  /**
   * 对话框标题
   */
  title?: string;
  /**
   * 对话框内容
   */
  content: string;
  /**
   * 对话框标题背景色
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * 对话框标题文字颜色
   */
  titleTextColor?: GameRGBAColor;
  /**
   * 对话框背景色
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * 对话框文字颜色
   */
  contentTextColor?: GameRGBAColor;
  /**
   * 是否绘制箭头
   */
  hasArrow?: boolean;
  /**
   * 对象的目标点
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * 如果目标实体已给出，则为目标实体的偏移量
   */
  lookTargetOffset?: GameVector3;
  /**
   * 相机上方向量
   */
  lookUp?: GameVector3;
  /**
   * 相机眼位置
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * 如果相机眼位置是实体，则为实体位置的偏移量
   */
  lookEyeOffset?: GameVector3;
};

/**
 * 游戏选择对话框参数类型定义
 */
declare type GameSelectDialogParams = {
  type: GameDialogType.SELECT;
  /**
   * 对话框标题
   */
  title?: string;
  /**
   * 对话框内容
   */
  content: string;
  /**
   * 对话框标题背景色
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * 对话框标题文字颜色
   */
  titleTextColor?: GameRGBAColor;
  /**
   * 对话框背景色
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * 对话框文字颜色
   */
  contentTextColor?: GameRGBAColor;
  /**
   * 选项列表
   */
  options: string[];
  /**
   * 对象的目标点
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * 如果目标实体已给出，则为目标实体的偏移量
   */
  lookTargetOffset?: GameVector3;
  /**
   * 相机上方向量
   */
  lookUp?: GameVector3;
  /**
   * 相机眼位置
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * 如果相机眼位置是实体，则为实体位置的偏移量
   */
  lookEyeOffset?: GameVector3;
};

/**
 * 游戏输入对话框参数类型定义
 */
declare type GameInputDialogParams = {
  type: GameDialogType.INPUT;
  /**
   * 对话框标题
   */
  title?: string;
  /**
   * 对话框内容
   */
  content: string;
  /**
   * 对话框标题背景色
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * 对话框标题文字颜色
   */
  titleTextColor?: GameRGBAColor;
  /**
   * 对话框背景色
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * 对话框文字颜色
   */
  contentTextColor?: GameRGBAColor;
  /**
   * 输入框默认文本
   */
  placeholder?: string;
  /**
   * 确认按钮文本
   */
  confirmText?: string;
  /**
   * 对象的目标点
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * 如果目标实体已给出，则为目标实体的偏移量
   */
  lookTargetOffset?: GameVector3;
  /**
   * 相机上方向量
   */
  lookUp?: GameVector3;
  /**
   * 相机眼位置
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * 如果相机眼位置是实体，则为实体位置的偏移量
   */
  lookEyeOffset?: GameVector3;
};
/**
 * 定义游戏对话框取消选项的类型
 * 用于表示对话框取消操作的回调函数
 */
declare type GameDialogCancelOption = {
  cancel: () => void; // 取消对话框的操作
};

/**
 * 定义游戏摄像头模式的枚举
 * 包含游戏摄像头可以设置的不同模式
 */
declare enum GameCameraMode {
  FOLLOW = "follow", // 摄像头跟随玩家移动
  FPS = "fps", // 第一人称射击视角
  FIXED = "fixed", // 固定视角
  RELATIVE = "relative", // 相对视角
}
declare enum GameCameraFreezedAxis {
  NONE = "",
  X = "x",
  Y = "y",
  Z = "z",
  XY = "xy",
  XZ = "xz",
  YZ = "yz",
  XYZ = "xyz",
}
declare enum GameInputDirection {
  NONE = "none",
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
  BOTH = "both",
}
/**
 * 游戏玩家关键帧接口，定义了玩家在游戏中的动画和视觉属性
 */
interface GamePlayerKeyframe {
  // 关键帧持续时间，单位为毫秒
  duration: number;
  // 加速曲线类型，用于控制动画开始时的速度变化
  easeIn: GameEasing;
  // 减速曲线类型，用于控制动画结束时的速度变化
  easeOut: GameEasing;
  // 玩家模型的缩放比例
  scale: number;
  // 玩家模型的颜色，使用RGB格式
  color: GameRGBColor;
  // 金属度属性，影响材质的反射和高光特性
  metalness: number;
  // 自发光属性，使模型在黑暗中可见
  emissive: number;
  // 光泽度属性，影响材质的反光强度
  shininess: number;
  // 玩家模型是否不可见
  invisible: boolean;
  // 玩家名称是否显示
  showName: boolean;
  // 玩家指示器是否显示
  showIndicator: boolean;
  // 颜色查找表，用于动态调整颜色
  colorLUT: string;
  // 相机模式，决定相机的移动和旋转行为
  cameraMode: GameCameraMode;
  // 相机实体，关联到场景中的具体对象
  cameraEntity: GameEntity | null;
  // 相机目标点，相机试图对准的位置
  cameraTarget: GameVector3;
  // 相机上方向量，定义相机的向上方向
  cameraUp: GameVector3;
  // 相机位置，相机在世界空间中的坐标
  cameraPosition: GameVector3;
  // 相机冻结轴，限制相机在特定轴上的移动
  cameraFreezedAxis: GameCameraFreezedAxis;
  // 相机垂直视野角，影响投影矩阵的构建
  cameraFovY: number;
  // 相机与目标点的距离
  cameraDistance: number;
}

/**
 * 游戏虚拟手柄接口，定义了手柄上各个按钮和摇杆的映射
 */
interface Gamepad {
  // 摇杆背景图片路径
  joystickBackground: string;
  // 摇杆控制器图片路径
  joystickController: string;
  // 飞行按钮图片路径
  flyButton: string;
  // 飞行背景图片路径
  flyingBackground: string;
  // 飞行控制器图片路径
  flyingController: string;
  // 跳跃按钮图片路径
  jump: string;
  // 蹲下按钮图片路径
  crouch: string;
  // 动作A按钮图片路径
  actionA: string;
  // 动作B按钮图片路径
  actionB: string;
}
/**
 * 玩家对应于连接到游戏的用户。
 * 每个玩家对象代表一个已连接的用户，可以包含玩家的详细信息，如用户名、得分、角色等。
 */
declare class GamePlayer {
  /**
   * 向玩家发送私聊消息
   * @category 聊天
   */
  directMessage: (message: string) => void;

  /**
   * 当玩家发起聊天事件时调用
   * @category 聊天
   */
  onChat: GameEventChannel<GameChatEvent>;

  /**
   * 获取下一个聊天事件
   * @category 聊天
   */
  nextChat: GameEventFuture<GameChatEvent>;

  /**
   * 当玩家按下按钮时调用
   * @category 输入
   */
  onPress: GameEventChannel<GameInputEvent>;

  /**
   * 获取下一个按键按下事件
   * @category 输入
   */
  nextPress: GameEventFuture<GameInputEvent>;

  /**
   * 当玩家释放按钮时调用
   * @category 输入
   */
  onRelease: GameEventChannel<GameInputEvent>;

  /**
   * 获取下一个按键释放事件
   * @category 输入
   */
  nextRelease: GameEventFuture<GameInputEvent>;

  /**
   * 当玩家重生时调用
   * @category 生命值
   */
  onRespawn: GameEventChannel<GameRespawnEvent>;

  /**
   * 获取下一个重生事件
   * @category 生命值
   */
  nextRespawn: GameEventFuture<GameRespawnEvent>;

  /**
   * 强制玩家重生
   * @category 生命值
   */
  forceRespawn: () => void;

  /**
   * 为玩家打开一个对话框
   * @category 对话
   * @param params 对话框参数，可以是 GameInputDialogParams、GameTextDialogParams 或 GameSelectDialogParams 中的一种。
   * @returns 如果参数类型为 GameSelectDialogParams，则返回 GameDialogSelectResponse 或 null 的 Promise；
   *          否则，返回 string 或 null 的 Promise。
   */
  dialog<
    T extends
      | GameInputDialogParams
      | GameTextDialogParams
      | GameSelectDialogParams
  >(
    params: T
  ): T extends GameSelectDialogParams
    ? Promise<GameDialogSelectResponse | null>
    : Promise<string | null>;
  dialog(params: GameInputDialogParams): Promise<string | null>;
  dialog(params: GameTextDialogParams): Promise<string | null>;
  dialog(
    params: GameSelectDialogParams
  ): Promise<GameDialogSelectResponse | null>;

  /**
   * 取消玩家的所有打开的对话框
   * @category 对话
   */
  cancelDialogs: () => void;

  /**
   * 在客户端打开一个超链接
   * @category 网页
   */
  link: (
    href: string,
    options?: {
      // 是否弹出确认的提醒？
      isConfirm?: boolean;

      // 是否新标签页打开网页？
      isNewTab?: boolean;
    }
  ) => void;

  /**
   * 列出玩家身上所有可穿戴物品
   * @param bodyPart 是一个可选过滤器，用于显示特定身体部位上的可穿戴物品
   * @category 显示
   */
  wearables: (bodyPart?: GameBodyPart) => GameWearable[];

  /**
   * 为玩家添加一个新的可穿戴物品
   * @category 显示
   */
  addWearable: (spec: Partial<GameWearable>) => GameWearable;

  /**
   * 从玩家身上移除一个可穿戴物品
   * @param wearable 要移除的可穿戴物品
   * @category 显示
   */
  removeWearable: (wearable: GameWearable) => void;

  /**
   * 通过皮肤名称设置玩家皮肤
   * @category 显示
   */
  setSkinByName: (skinName: string) => void;

  /**
   * 将玩家重置为默认皮肤
   * @category 显示
   */
  resetToDefaultSkin: () => void;

  /**
   * 清除玩家自定义皮肤并恢复到角色皮肤
   * @category 显示
   */
  clearSkin: () => void;

  /**
   * 为玩家播放声音
   * @category 声音
   */
  sound: (
    spec:
      | {
          // 用于表示样本或示例数据
          sample: GameAudioAssets;

          // 用于表示增益或音量调整
          gain?: number;

          // 用于表示音高或频率调整
          pitch?: number;
        }
      | GameAudioAssets
  ) => Sound;

  /**
   * 播放动画
   * @category 动画
   */
  animate: (
    keyframes: Partial<GamePlayerKeyframe>[],
    playbackConfig?: GameAnimationPlaybackConfig
  ) => GameAnimation<GamePlayerKeyframe, GamePlayer>;

  /**
   * 获取当前播放的所有动画
   * @category 动画
   */
  getAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[];

  /**
   * 将用户踢出服务器
   * @category 管理
   */
  kick: () => void;

  /**
   * 设置摄像机的垂直旋转角度
   * @category 摄像机
   */
  setCameraPitch: (value: number) => void;

  /**
   * 设置摄像机的水平旋转角度
   * @category 摄像机
   */
  setCameraYaw: (value: number) => void;

  /**
   * 打开商品购买对话框
   * @category 网页
   */
  openMarketplace: (productIds: number[]) => void;

  /**
   * 获取玩家的喵币数量
   * @category 经济
   */
  getMiaoShells: () => Promise<number>;

  /**
   * 打开分享模态框
   * @category 网页
   */
  share: (content: string) => void;

  /**
   * 打开用户个人资料对话框
   * @category 社交
   */
  openUserProfileDialog: (userId: number) => void;

  /**
   * 查询用户的社交关系
   * @category 社交
   */
  querySocial: (socialType: SocialType) => Promise<number[]>;

  /**
   * 查询用户的社交统计信息
   * @category 社交
   */
  querySocialStatistic: () => Promise<SocialStatisticType>;

  /**
   * 当玩家按下或释放键盘键时调用
   * @category 输入
   */
  onKeyDown: GameEventChannel<GameKeyBoardEvent>;

  /**
   * 当玩家释放键盘键时调用
   * @category 输入
   */
  onKeyUp: GameEventChannel<GameKeyBoardEvent>;
  /**
   * 设置虚拟按键图片
   */
  gamepad: Gamepad;

  /**
   * 玩家名称。常量。
   */
  name: string;

  /**
   * 登录玩家的用户ID
   */
  userId: string;

  /**
   * 此玩家的唯一用户密钥。可用于将他们的信息保存到数据库中。
   */
  userKey: string;

  /**
   * 如果已登录，则为玩家的用户ID。
   */
  boxId: string;

  /**
   * 如果已登录，则为玩家的头像。
   */
  avatar: string;

  /**
   * 玩家URL
   */
  url: URL;

  /**
   * 玩家的初始生成点
   * @category 生成
   */
  spawnPoint: GameVector3;

  /**
   * 移动边界
   * @category 生成
   */
  movementBounds: GameBounds3;

  /**
   * 缩放比例
   * @category 显示
   */
  scale: number;

  /**
   * 颜色
   * @category 显示
   */
  color: GameRGBColor;

  /**
   * 金属度
   * @category 显示
   */
  metalness: number;

  /**
   * 发光强度
   * @category 显示
   */
  emissive: number;

  /**
   * 光泽度
   * @category 显示
   */
  shininess: number;

  /**
   * 是否隐身
   * @category 显示
   */
  invisible: boolean;

  /**
   * 是否显示名称
   * @category 显示
   */
  showName: boolean;

  /**
   * 是否显示指示器
   * @category 显示
   */
  showIndicator: boolean;

  /**
   * 是否死亡
   * @category 生命值
   */
  dead: boolean;

  /**
   * 颜色分级查找表，应用于玩家以调整游戏状态的颜色
   */
  colorLUT: string;

  /**
   * 摄像机行为模式。
   *  + `"FPS"` - 第一人称摄像机
   *  + `"FOLLOW"` - 第三人称跟随摄像机（默认）
   *  + `"FIXED"` - 第三人称固定摄像机
   *  + `"RELATIVE"` - 相对玩家位置的第三人称摄像机
   * @category 摄像机
   */
  cameraMode: GameCameraMode;

  /**
   * 在FPS或FOLLOW模式下，玩家摄像机跟随的实体
   * @category 摄像机
   */
  cameraEntity: GameEntity | null;

  /**
   * 在FIXED模式下的摄像机目标点
   * @category 摄像机
   */
  cameraTarget: GameVector3;

  /**
   * 在FIXED模式下的摄像机上向量
   * @category 摄像机
   */
  cameraUp: GameVector3;

  /**
   * 在FIXED模式下的摄像机眼睛位置
   * @category 摄像机
   */
  cameraPosition: GameVector3;

  /**
   * 在RELATIVE模式下冻结的摄像机轴
   * @category 摄像机
   */
  cameraFreezedAxis: GameCameraFreezedAxis;

  /**
   * 摄像机视场角Y
   * @category 摄像机
   */
  cameraFovY: number;

  /**
   * 摄像机距离
   * @category 摄像机
   */
  cameraDistance: number;

  /**
   * 如果为true，允许玩家飞行
   * @category 移动
   */
  canFly: boolean;

  /**
   * 如果为true，玩家是幽灵，可以穿过墙壁
   * @category 移动
   */
  spectator: boolean;

  /**
   * 最大步行速度
   * @category 移动
   */
  walkSpeed: number;

  /**
   * 步行加速度
   * @category 移动
   */
  walkAcceleration: number;

  /**
   * 最大跑步速度
   * @category 移动
   */
  runSpeed: number;

  /**
   * 跑步加速度
   * @category 移动
   */
  runAcceleration: number;

  /**
   * 蹲下行走速度
   * @category 移动
   */
  crouchSpeed: number;

  /**
   * 蹲下行走加速度
   * @category 移动
   */
  crouchAcceleration: number;

  /**
   * 最大游泳速度
   * @category 移动
   */
  swimSpeed: number;

  /**
   * 游泳加速度
   * @category 移动
   */
  swimAcceleration: number;

  /**
   * 最大飞行速度
   * @category 移动
   */
  flySpeed: number;

  /**
   * 飞行加速度
   * @category 移动
   */
  flyAcceleration: number;

  /**
   * 跳跃速度因子
   * @category 移动
   */
  jumpSpeedFactor: number;

  /**
   * 跳跃加速度率
   * @category 移动
   */
  jumpAccelerationFactor: number;

  /**
   * 跳跃速度冲量
   * @category 移动
   */
  jumpPower: number;

  /**
   * 双重跳跃速度冲量
   * @category 移动
   */
  doubleJumpPower: number;

  /**
   * 在RELATIVE模式下冻结的前向方向
   * @category 移动
   */
  freezedForwardDirection: GameVector3 | null;

  /**
   * 移动状态
   * @category 状态
   */
  moveState: GamePlayerMoveState;

  /**
   * 行走状态
   * @category 状态
   */
  walkState: GamePlayerWalkState;

  /**
   * 是否交换输入方向
   * @category 输入
   */
  swapInputDirection: boolean;

  /**
   * 反转输入方向
   * @category 输入
   */
  reverseInputDirection: GameInputDirection;

  /**
   * 禁用的输入方向
   * @category 输入
   */
  disableInputDirection: GameInputDirection;

  /**
   * 是否按下了行走按钮
   * @category 输入
   */
  walkButton: boolean;

  /**
   * 是否按下了蹲下按钮
   * @category 输入
   */
  crouchButton: boolean;

  /**
   * 是否按下了跳跃按钮
   * @category 输入
   */
  jumpButton: boolean;

  /**
   * 如果为true，启用玩家输入按钮动作0
   * @category 输入
   */
  enableAction0: boolean;

  /**
   * 如果为true，启用玩家输入按钮动作1
   * @category 输入
   */
  enableAction1: boolean;

  /**
   * 是否按下了动作0按钮
   * @category 输入
   */
  action0Button: boolean;

  /**
   * 是否按下了动作1按钮
   * @category 输入
   */
  action1Button: boolean;

  /**
   * 是否启用跳跃
   * @category 输入
   */
  enableJump: boolean;

  /**
   * 是否启用双重跳跃
   * @category 输入
   */
  enableDoubleJump: boolean;

  /**
   * 是否启用蹲下
   * @category 输入
   */
  enableCrouch: boolean;

  /**
   * 是否启用3D光标
   * @category 输入
   */
  enable3DCursor: boolean;

  /**
   * 面向方向
   * @category 输入
   */
  facingDirection: GameVector3;

  /**
   * 摄像机水平旋转角度
   * @category 输入
   */
  cameraYaw: number;

  /**
   * 摄像机垂直旋转角度
   * @category 输入
   */
  cameraPitch: number;

  /**
   * 玩家重生时播放的声音
   * @category 声音
   */
  spawnSound: GameSoundEffect;

  /**
   * 玩家跳跃时播放的声音
   * @category 声音
   */
  jumpSound: GameSoundEffect;

  /**
   * 玩家双重跳跃时播放的声音
   * @category 声音
   */
  doubleJumpSound: GameSoundEffect;

  /**
   * 玩家落地时播放的声音
   * @category 声音
   */
  landSound: GameSoundEffect;

  /**
   * 玩家蹲下时播放的声音
   * @category 声音
   */
  crouchSound: GameSoundEffect;

  /**
   * 玩家行走时播放的脚步声
   * @category 声音
   */
  stepSound: GameSoundEffect;

  /**
   * 玩家游泳时播放的声音
   * @category 声音
   */
  swimSound: GameSoundEffect;

  /**
   * 玩家按下动作0按钮时播放的声音
   * @category 声音
   */
  action0Sound: GameSoundEffect;
  /**
   * 玩家按下动作1按钮时播放的声音
   * @category 声音
   */
  action1Sound: GameSoundEffect;

  /**
   * 实体进入水中时播放的声音
   * @category 声音
   */
  enterWaterSound: GameSoundEffect;

  /**
   * 实体离开水中时播放的声音
   * @category 声音
   */
  leaveWaterSound: GameSoundEffect;

  /**
   * 玩家开始飞行时播放的声音
   * @category 声音
   */
  startFlySound: GameSoundEffect;

  /**
   * 玩家停止飞行时播放的声音
   * @category 声音
   */
  stopFlySound: GameSoundEffect;

  /**
   * 玩家的背景音乐
   * @category 声音
   */
  music: GameSoundEffect;

  /**
   * 如果为true，则玩家不能聊天
   * @category 聊天
   * @deprecated 当前未使用
   */
  muted: boolean;

  /**
   * 皮肤部件
   * @category 显示
   */
  skin: GameSkin;

  /**
   * 皮肤部件是否不可见
   * @category 显示
   */
  skinInvisible: GameSkinInvisible;

  /**
   * 导航器
   */
  navigator: PlayerNavigator;
  /**
   * @ignore
   */
  constructor(
    /**
     * Sends a private message directly to player
     * @category chat
     */
    directMessage: (message: string) => void,
    /**
     * Called whenever player initiates a chat event
     * @category chat
     */
    onChat: GameEventChannel<GameChatEvent>,
    nextChat: GameEventFuture<GameChatEvent>,
    /**
     * Called whenever player presses a button
     * @category input
     */
    onPress: GameEventChannel<GameInputEvent>,
    nextPress: GameEventFuture<GameInputEvent>,
    /**
     * Called whenever a player releases a buttin
     * @category input
     */
    onRelease: GameEventChannel<GameInputEvent>,
    nextRelease: GameEventFuture<GameInputEvent>,
    /**
     * @category health
     */
    onRespawn: GameEventChannel<GameRespawnEvent>,
    nextRespawn: GameEventFuture<GameRespawnEvent>,
    /**
     * @category health
     */
    forceRespawn: () => void,
    /**
     * Opens a dialog for this player
     * @category dialog
     */
    dialog: GameDialogCall,
    /**
     * Cancels any open dialogs for this player
     * @category dialog
     */
    cancelDialogs: () => void,
    /**
     * Opens a hyperlink on the client
     * @category web
     */
    link: (
      href: string,
      options?: {
        isConfirm?: boolean;
        isNewTab?: boolean;
      }
    ) => void,
    /**
     * List all wearable objects attached to the player
     * @param bodyPart is an optional filter to show only wearables attached to a specific body part
     * @category display
     */
    wearables: (bodyPart?: GameBodyPart) => GameWearable[],
    /**
     * Attach a new wearable object to the player
     * @category display
     */
    addWearable: (spec: Partial<GameWearable>) => GameWearable,
    /**
     * Remove a wearable object from a player
     * @param wearable is the wearable to remove
     * @category display
     */
    removeWearable: (wearable: GameWearable) => void,
    /**
     * Set player skin by skin name
     * @category display
     */
    setSkinByName: (skinName: string) => void,
    /**
     * Reset player to default skin
     * @category display
     */
    resetToDefaultSkin: () => void,
    /**
     * Clear player custom skin and restore to avatar skin
     * @category display
     */
    clearSkin: () => void,
    /**
     * Play sound for player
     * @category sound
     */
    sound: (
      spec:
        | {
            sample: GameAudioAssets;
            gain?: number;
            pitch?: number;
          }
        | GameAudioAssets
    ) => Sound,
    /**
     * Play an animation
     */
    animate: (
      keyframes: Partial<GamePlayerKeyframe>[],
      playbackConfig?: GameAnimationPlaybackConfig
    ) => GameAnimation<GamePlayerKeyframe, GamePlayer>,
    getAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[],
    /**
     * Kick the user off the server
     */
    kick: () => void,
    /**
     * Reset camera pitch
     */
    setCameraPitch: (value: number) => void,
    /**
     * Reset camera pitch
     */
    setCameraYaw: (value: number) => void,
    /**
     * post message to iframe parent
     * @category web
     */
    postMessage: (event: {
      type: string;
      value: object;
      isOld: boolean;
    }) => void,
    /**
     * add listener for message event of iframe parent
     * @category web
     */
    addEventListener: (
      type: NavigatorEventType,
      listener: (event: { data: object }) => void
    ) => void,
    /**
     * open product purchase dialog
     * @category web
     */
    openMarketplace: (productIds: number[]) => void,
    getMiaoShells: () => Promise<number>,
    /**
     * open share modal
     * @category web
     */
    share: (content: string) => void,
    openUserProfileDialog: (userId: number) => void,
    querySocial: (socialType: SocialType) => Promise<number[]>,
    /**
     * Called whenever player press down or up
     * @category input
     */
    onKeyDown: GameEventChannel<GameKeyBoardEvent>,
    onKeyUp: GameEventChannel<GameKeyBoardEvent>
  );
}
/**
 * Player 用户设备相关的接口
 */
declare class PlayerNavigator {
  emitEvent: (type: string, value: object) => void;
  addEventListener: (
    type: NavigatorEventType,
    listener: (event: { data: object }) => void
  ) => void;
  dispatchEvent: (type: string, value: object) => void;
  constructor(
    emitEvent: (type: string, value: object) => void,
    addEventListener: (
      type: NavigatorEventType,
      listener: (event: { data: object }) => void
    ) => void,
    dispatchEvent: (type: string, value: object) => void
  );
}
declare type NavigatorEventType = "message";
/**
 * 执行射线检测的结果。包含关于射线检测及其命中的对象的信息。
 */
declare class GameRaycastResult {
  /**
   * 如果为 true，射线检测命中了对象。
   */
  hit: boolean;

  /**
   * 被射线检测命中的实体。
   */
  hitEntity: GameEntity | null;

  /**
   * 被射线检测命中的方块 ID（如果没有命中方块则为 0）。
   */
  hitVoxel: number;

  /**
   * 射线检测的起点。
   */
  origin: GameVector3;

  /**
   * 射线检测的方向。
   */
  direction: GameVector3;

  /**
   * 沿射线行进的距离。
   */
  distance: number;

  /**
   * 射线交点的位置。
   */
  hitPosition: GameVector3;

  /**
   * 交点处表面的法向量。
   */
  normal: GameVector3;

  /**
   * 如果命中了方块，该方块的网格坐标。
   */
  voxelIndex: GameVector3;

  /**
   * @ignore
   * 构造函数，初始化射线检测结果。
   * @param hit 如果为 true，射线检测命中了对象。
   * @param hitEntity 被射线检测命中的实体。
   * @param hitVoxel 被射线检测命中的方块 ID（如果没有命中方块则为 0）。
   * @param origin 射线检测的起点。
   * @param direction 射线检测的方向。
   * @param distance 沿射线行进的距离。
   * @param hitPosition 射线交点的位置。
   * @param normal 交点处表面的法向量。
   * @param voxelIndex 如果命中了方块，该方块的网格坐标。
   */
  constructor(
    hit: boolean,
    hitEntity: GameEntity | null,
    hitVoxel: number,
    origin: GameVector3,
    direction: GameVector3,
    distance: number,
    hitPosition: GameVector3,
    normal: GameVector3,
    voxelIndex: GameVector3
  );
}
/**
 * 传递给射线检测方法的配置参数。
 */
interface GameRaycastOptions {
  /**
   * 射线允许的最大距离。
   */
  maxDistance: number;

  /**
   * 如果为 true，则忽略流体方块。
   */
  ignoreFluid: boolean;

  /**
   * 如果为 true，则不检测与方块的交点。
   */
  ignoreVoxel: boolean;

  /**
   * 如果为 true，则不检测与实体的交点。
   */
  ignoreEntities: boolean;

  /**
   * 忽略选定的实体。
   */
  ignoreSelector: GameSelectorString;
}

/**
 * 使用 EventChannel 可以订阅来自某些对象的事件。
 *
 * 事件通道接受一个事件处理程序作为输入，并返回一个可以用于取消处理程序的令牌。
 *
 * **示例:**
 * ```typescript
 * const token = world.onTick(() => console.log("tick !"));
 * setTimeout(() => {
 *      console.log('取消 tick 处理程序');
 *      token.cancel();
 *      // 不再记录 tick 事件
 * }, 1000);
 * ```
 *
 * @param handler 每当事件触发时调用的处理程序回调。
 * @typeparam EventType 通道发出的事件类型。
 * @returns 一个事件处理程序令牌，可以用于取消事件处理程序。
 * @category 事件
 */
declare type GameEventChannel<EventType> = (
  handler: (event: EventType) => void
) => GameEventHandlerToken;

/**
 * Promise 提供了另一种处理事件的方式。你可以使用 Promise 来组织长序列的事件，
 * 通过结构化编程来简化代码。在某些情况下，这可以使代码更简单和清晰，但必须谨慎使用。
 * 异步代码在等待时可能会被中断，这意味着世界中的事物可能会在你的代码之外发生变化。
 * 此外，异步代码中生成的错误不会带有堆栈跟踪，这会使调试变得复杂。考虑这些因素并谨慎使用 Promise。
 *
 * **示例:**
 * ```typescript
 * // 等待 2 名玩家进入世界
 * async function waitForPlayers(count) {
 *      while (world.querySelectorAll('player').length < count) {
 *          const { entity } = await world.nextPlayerJoin();
 *          world.say(entity.player.name + ' 加入了');
 *      }
 * }
 *
 * waitForPlayers(2).then(() => world.say('游戏准备就绪'));
 * ```
 *
 * @param filter 一个可选的函数，用于检查事件类型。如果过滤器不为真，则事件不会被分发。如果没有提供过滤器，则未来会在下一个事件上触发。
 * @typeparam EventType 通道发出的事件类型。
 * @returns 一个 Promise，在匹配过滤器的事件触发时解析。
 * @category 事件
 */
declare type GameEventFuture<EventType> = (
  filter?: (event: EventType) => boolean
) => Promise<EventType>;
/**
 * 当注册处理程序时由 {@link Game.GameEventChannel} 返回。可以用于取消处理程序。
 * @category 事件
 */
declare class GameEventHandlerToken {
  /**
   * 取消事件处理程序。
   */
  cancel: () => void;

  /**
   * 恢复监听事件处理程序。
   */
  resume: () => void;

  /**
   * 检查处理程序是否处于活动状态。
   */
  active: () => boolean;

  /**
   * @ignore
   * 构造函数，初始化事件处理程序令牌。
   * @param cancel 取消事件处理程序的函数。
   * @param resume 恢复监听事件处理程序的函数。
   * @param active 检查处理程序是否处于活动状态的函数。
   */
  constructor(cancel: () => void, resume: () => void, active: () => boolean);
}

/**
 * 每个游戏帧由 {@link Game.GameWorld.onTick} 触发的事件。
 * @category 事件
 */
declare class GameTickEvent {
  /**
   * 事件触发的帧数。
   */
  tick: number;

  /**
   * 上一次处理的帧数。
   */
  prevTick: number;

  /**
   * 是否由于脚本延迟而跳过了任何帧。
   */
  skip: boolean;

  /**
   * 帧之间的时间间隔（毫秒）。
   */
  elapsedTimeMS: number;

  /**
   * @ignore
   * 构造函数，初始化游戏帧事件。
   * @param tick 事件触发的帧数。
   * @param prevTick 上一次处理的帧数。
   * @param skip 是否由于脚本延迟而跳过了任何帧。
   * @param elapsedTimeMS 帧之间的时间间隔（毫秒）。
   */
  constructor(
    tick: number,
    prevTick: number,
    skip: boolean,
    elapsedTimeMS: number
  );
}
/**
 * 当某个实体被创建或销毁时触发的事件。
 * 由 {@link Game.GameWorld.onPlayerJoin}, {@link Game.GameWorld.onPlayerLeave}, {@link Game.GameWorld.onEntityCreate}, {@link Game.GameWorld.onEntityDestroy} 和 {@link Game.GameEntity.onDestroy} 触发。
 * @category 事件
 */
declare class GameEntityEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 被创建或销毁的实体。
   */
  entity: GameEntity;

  /**
   * @ignore
   * 构造函数，初始化实体事件。
   * @param tick 事件发生的时间。
   * @param entity 被创建或销毁的实体。
   */
  constructor(tick: number, entity: GameEntity);
}

/**
 * 当实体激活或取消激活触发器时触发的事件。
 * @category 事件
 */
declare class GameTriggerEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 触发事件的实体。
   */
  entity: GameEntity;

  /**
   * @ignore
   * 构造函数，初始化触发器事件。
   * @param tick 事件发生的时间。
   * @param entity 触发事件的实体。
   */
  constructor(tick: number, entity: GameEntity);
}

/**
 * 当实体受到伤害时触发的事件。
 * 由 {@link Game.GameWorld.onTakeDamage} 和 {@link Game.GameEntity.onTakeDamage} 触发。
 * @category 事件
 */
declare class GameDamageEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 受到伤害的实体。
   */
  entity: GameEntity;

  /**
   * 伤害量。
   */
  damage: number;

  /**
   * 攻击者实体。
   */
  attacker: GameEntity | null;

  /**
   * 伤害类型。
   */
  damageType: string;

  /**
   * @ignore
   * 构造函数，初始化伤害事件。
   * @param tick 事件发生的时间。
   * @param entity 受到伤害的实体。
   * @param damage 伤害量。
   * @param attacker 攻击者实体。
   * @param damageType 伤害类型。
   */
  constructor(
    tick: number,
    entity: GameEntity,
    damage: number,
    attacker: GameEntity | null,
    damageType: string
  );
}

/**
 * 当实体死亡时触发的事件。
 * 由 {@link Game.GameWorld.onTakeDamage} 和 {@link Game.GameEntity.onTakeDamage} 触发。
 * @category 事件
 */
declare class GameDieEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 受到伤害的实体。
   */
  entity: GameEntity;

  /**
   * 攻击者实体。
   */
  attacker: GameEntity | null;

  /**
   * 伤害类型。
   */
  damageType: string;

  /**
   * @ignore
   * 构造函数，初始化死亡事件。
   * @param tick 事件发生的时间。
   * @param entity 受到伤害的实体。
   * @param attacker 攻击者实体。
   * @param damageType 伤害类型。
   */
  constructor(
    tick: number,
    entity: GameEntity,
    attacker: GameEntity | null,
    damageType: string
  );
}

/**
 * 当玩家重生时触发的事件。
 * @category 事件
 */
declare class GameRespawnEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 重生的玩家实体。
   */
  entity: GamePlayerEntity;

  /**
   * @ignore
   * 构造函数，初始化重生事件。
   * @param tick 事件发生的时间。
   * @param entity 重生的玩家实体。
   */
  constructor(tick: number, entity: GamePlayerEntity);
}

/**
 * 当两个实体发生碰撞时触发的事件。
 * 由 {@link Game.GameWorld.onEntityContact}, {@link Game.GameWorld.onEntitySeparate}, {@link Game.GameEntity.onEntityContact}, {@link Game.GameEntity.onEntitySeparate} 触发。
 * @category 事件
 */
declare class GameEntityContactEvent {
  /**
   * 实体发生碰撞的时间。
   */
  tick: number;

  /**
   * 第一个实体。
   */
  entity: GameEntity;

  /**
   * 第二个实体。
   */
  other: GameEntity;

  /**
   * 碰撞的分离轴。
   */
  axis: GameVector3;

  /**
   * 碰撞产生的力。
   */
  force: GameVector3;

  /**
   * @ignore
   * 构造函数，初始化实体碰撞事件。
   * @param tick 实体发生碰撞的时间。
   * @param entity 第一个实体。
   * @param other 第二个实体。
   * @param axis 碰撞的分离轴。
   * @param force 碰撞产生的力。
   */
  constructor(
    tick: number,
    entity: GameEntity,
    other: GameEntity,
    axis: GameVector3,
    force: GameVector3
  );
}

/**
 * 当实体与地形接触时触发的事件。
 * 由 {@link Game.GameWorld.onVoxelContact}, {@link Game.GameWorld.onVoxelSeparate}, {@link Game.GameEntity.onVoxelContact}, {@link Game.GameEntity.onVoxelSeparate} 触发。
 * @category 事件
 */
declare class GameVoxelContactEvent {
  /**
   * 接触事件发生的时间。
   */
  tick: number;

  /**
   * 与地形接触的实体。
   */
  entity: GameEntity;

  /**
   * 接触方块的 x 坐标。
   */
  x: number;

  /**
   * 接触方块的 y 坐标。
   */
  y: number;

  /**
   * 接触方块的 z 坐标。
   */
  z: number;

  /**
   * 方块的 ID。
   */
  voxel: voxelId;

  /**
   * 分离轴。
   */
  axis: GameVector3;

  /**
   * 碰撞力。
   */
  force: GameVector3;

  /**
   * @ignore
   * 构造函数，初始化方块接触事件。
   * @param tick 接触事件发生的时间。
   * @param entity 与地形接触的实体。
   * @param x 接触方块的 x 坐标。
   * @param y 接触方块的 y 坐标。
   * @param z 接触方块的 z 坐标。
   * @param voxel 方块的 ID。
   * @param axis 分离轴。
   * @param force 碰撞力。
   */
  constructor(
    tick: number,
    entity: GameEntity,
    x: number,
    y: number,
    z: number,
    voxel: number,
    axis: GameVector3,
    force: GameVector3
  );
}
/**
 * 当实体进入或离开流体时触发的事件。
 * 由 {@link Game.GameWorld.onFluidEnter}, {@link Game.GameWorld.onFluidLeave}, {@link Game.GameEntity.onFluidEnter}, {@link Game.GameEntity.onFluidLeave} 触发。
 * @category 事件
 */
declare class GameFluidContactEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 被修改的实体。
   */
  entity: GameEntity;

  /**
   * 流体方块的 ID。
   */
  voxel: voxelId;

  /**
   * @ignore
   * 构造函数，初始化流体接触事件。
   * @param tick 事件发生的时间。
   * @param entity 被修改的实体。
   * @param voxel 流体方块的 ID。
   */
  constructor(tick: number, entity: GameEntity, voxel: number);
}

/**
 * 当实体发起聊天事件时触发。
 * 由 {@link Game.GameWorld.onChat} 和 {@link Game.GameEntity.onChat} 触发。
 * @category 事件
 */
declare class GameChatEvent {
  /**
   * 聊天事件发生的时间。
   */
  tick: number;

  /**
   * 发起聊天事件的实体。
   */
  entity: GameEntity;

  /**
   * 实体在聊天事件中说的话。
   */
  message: string;

  /**
   * @ignore
   * 构造函数，初始化聊天事件。
   * @param tick 聊天事件发生的时间。
   * @param entity 发起聊天事件的实体。
   * @param message 实体在聊天事件中说的话。
   */
  constructor(tick: number, entity: GameEntity, message: string);
}

/**
 * 当玩家购买成功时触发的事件。
 * 由 {@link Game.GameWorld.onPlayerPurchaseSuccess} 触发。
 * @category 事件
 */
declare class GamePurchaseSuccessEvent {
  /**
   * 购买成功事件发生的时间。
   */
  tick: number;

  /**
   * 触发购买事件的实体。
   */
  userId: string;

  /**
   * 购买的商品 ID。
   */
  productId: number;

  /**
   * 购买成功的订单号。
   */
  orderId: number;

  /**
   * @ignore
   * 构造函数，初始化购买成功事件。
   * @param tick 购买成功事件发生的时间。
   * @param userId 触发购买事件的实体。
   * @param productId 购买的商品 ID。
   * @param orderId 购买成功的订单号。
   */
  constructor(tick: number, userId: string, productId: number, orderId: number);
}

/**
 * 当实体进行交互时触发的事件。
 * 由 {@link Game.GameWorld.onInteract} 和 {@link Game.GameEntity.onInteract} 触发。
 * @category 事件
 */
declare class GameInteractEvent {
  /**
   * 事件发生的时间。
   */
  tick: number;

  /**
   * 发起交互的实体。
   */
  entity: GamePlayerEntity;

  /**
   * 接收交互的实体。
   */
  targetEntity: GameEntity;

  /**
   * @ignore
   * 构造函数，初始化交互事件。
   * @param tick 事件发生的时间。
   * @param entity 发起交互的实体。
   * @param targetEntity 接收交互的实体。
   */
  constructor(tick: number, entity: GamePlayerEntity, targetEntity: GameEntity);
}
/**
 * Type of a button pressed by a player
 * @category events
 */
declare enum GameButtonType {
  WALK = "walk",
  RUN = "run",
  CROUCH = "crouch",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2",
  FLY = "fly",
  ACTION0 = "action0",
  ACTION1 = "action1",
}
/**
 * 当玩家按下按钮时生成输入事件。
 * 事件的时间戳表示玩家按下按钮的确切时刻。
 * 由 {@link Game.GameWorld.onPress}, {@link Game.GameWorld.onRelease}, {@link Game.GamePlayer.onPress}, {@link Game.GamePlayer.onRelease} 触发。
 * @category 事件
 */
declare class GameInputEvent {
  /**
   * 按钮被按下的时间。
   */
  tick: number;

  /**
   * 按下按钮的玩家引用。
   */
  entity: GamePlayerEntity;

  /**
   * 按下按钮时玩家的位置。
   */
  position: GameVector3;

  /**
   * 玩家输入的按钮。
   */
  button: GameButtonType;

  /**
   * 如果为 true，则这是一个按下事件。否则为 false，表示这是一个释放事件。
   */
  pressed: boolean;

  /**
   * 玩家在按下按钮的确切时刻从其摄像机视角发起的射线检测结果。
   */
  raycast: GameRaycastResult;

  /**
   * @ignore
   * 构造函数，初始化游戏输入事件。
   * @param tick 按钮被按下的时间。
   * @param entity 按下按钮的玩家引用。
   * @param position 按下按钮时玩家的位置。
   * @param button 玩家输入的按钮。
   * @param pressed 如果为 true，则这是一个按下事件。否则为 false，表示这是一个释放事件。
   * @param raycast 玩家在按下按钮的确切时刻从其摄像机视角发起的射线检测结果。
   */
  constructor(
    tick: number,
    entity: GamePlayerEntity,
    position: GameVector3,
    button: GameButtonType,
    pressed: boolean,
    raycast: GameRaycastResult
  );
}
/**
 * 游戏点击事件类，用于封装游戏中的点击事件信息。
 */
declare class GameClickEvent {
  /**
   * 发生点击事件的游戏刻。
   */
  tick: number;

  /**
   * 被点击的游戏实体。
   */
  entity: GameEntity;

  /**
   * 发起点击事件的玩家实体。
   */
  clicker: GamePlayerEntity;

  /**
   * 被按下的按钮，ACTION0 表示左键，ACTION1 表示右键。
   */
  button: GameButtonType.ACTION0 | GameButtonType.ACTION1;

  /**
   * 点击者与被点击实体之间的距离。
   */
  distance: number;

  /**
   * 点击发生时点击者的位置。
   */
  clickerPosition: GameVector3;

  /**
   * 从点击者到被点击实体的射线检测结果。
   */
  raycast: GameRaycastResult;

  /**
   * @ignore
   * 构造函数，初始化游戏点击事件。
   * @param tick 发生点击事件的游戏刻。
   * @param entity 被点击的游戏实体。
   * @param clicker 发起点击事件的玩家实体。
   * @param button 被按下的按钮，ACTION0 表示左键，ACTION1 表示右键。
   * @param distance 点击者与被点击实体之间的距离。
   * @param clickerPosition 点击发生时点击者的位置。
   * @param raycast 从点击者到被点击实体的射线检测结果。
   */
  constructor(
    tick: number,
    entity: GameEntity,
    clicker: GamePlayerEntity,
    button: GameButtonType.ACTION0 | GameButtonType.ACTION1,
    distance: number,
    clickerPosition: GameVector3,
    raycast: GameRaycastResult
  );
}

/**
 * 游戏键盘事件类，用于封装游戏中的键盘事件信息。
 */
declare class GameKeyBoardEvent {
  /**
   * 发生键盘事件的游戏刻。
   */
  tick: number;

  /**
   * 按下的键码。
   */
  keyCode: number;

  /**
   * 构造函数，初始化游戏键盘事件。
   * @param tick 发生键盘事件的游戏刻。
   * @param keyCode 按下的键码。
   */
  constructor(tick: number, keyCode: number);
}
/**
 * 表示游戏动画中的一个事件，封装了当前帧数、目标对象、动画详情和取消状态等信息。
 * @template KeyframeType 动画关键帧的类型。
 * @template TargetType 动画应用的目标对象的类型。
 */
declare class GameAnimationEvent<KeyframeType, TargetType> {
  // 当前动画的帧数。
  tick: number;
  // 动画应用的目标对象。
  target: TargetType;
  // 此事件所属的动画实例。
  animation: GameAnimation<KeyframeType, TargetType>;
  // 标记事件是否已被取消。
  cancelled: boolean;

  /**
   * 构造一个新的 GameAnimationEvent 实例。
   * @param tick 当前动画的帧数。
   * @param target 动画应用的目标对象。
   * @param animation 此事件所属的动画实例。
   * @param cancelled 标记事件是否已被取消。
   */
  constructor(
    tick: number,
    target: TargetType,
    animation: GameAnimation<KeyframeType, TargetType>,
    cancelled: boolean
  );
}
/**
 * Selectors 是一种强大的语法，用于搜索游戏中的所有对象。游戏中的选择器接口借鉴了 DOM API 的设计。
 *
 * 示例：
 * ```javascript
 * const entities = world.querySelector('*');           // 世界中的所有实体
 * const players = world.querySelectorAll('player');    // 游戏中的所有玩家
 * const theChair = world.querySelector('#chair');      // ID 为 "chair" 的第一个实体
 * const boxes = world.querySelectorAll('.box');        // 标记为 "box" 的所有实体
 * const boxChair = world.querySelector('.box .red');   // 标记为 "box" 并且颜色为红色的实体
 * ```
 */
declare type GameSelectorString = string;
/**
 * Interface for all project resources
 */
declare class GameResourceSystem {
  ls: (path?: string) => GameAssetListEntry[];
  constructor(ls: (path?: string) => GameAssetListEntry[]);
}
/**
 * 描述资产的类型
 */
declare enum GameAssetType {
  VOXEL_MESH = "mesh",
  DIRECTORY = "directory",
  COLOR_LUT = "lut",
  JS_SCRIPT = "js",
  IMAGE = "image",
  PARTICLE_TEXTURE = "snow",
  SOUND = "sound",
  PICTURE = "picture",
}

declare class GameAssetListEntry {
  /**
   * 资产的完全限定路径，按目录分割
   */
  path: string;
  /**
   * 资产的类型
   */
  type: GameAssetType;
  /**
   * @ignore
   */
  constructor(
    /**
     * Fully qualified path of asset, split by directory
     */
    path: string,
    /**
     * Type of asset
     */
    type: GameAssetType
  );
}
/**
 * A standard SQL database
 */
declare class GameDatabase {
  /**
   * Executes a SQL query on this database
   */
  sql: (
    sql: string[],
    ...params: (number | string | Uint8Array | boolean | null)[]
  ) => GameQueryResult;
  /**
   * @ignore
   */
  constructor(
    /**
     * Executes a SQL query on this database
     */
    sql: (
      sql: string[],
      ...params: (number | string | Uint8Array | boolean | null)[]
    ) => GameQueryResult
  );
}
/**
 * Query result api
 */
declare class GameQueryResult implements AsyncIterable<any> {
  next: () => Promise<{
    done: boolean;
    value: any;
  }>;
  [Symbol.asyncIterator](): this;
  return: () => Promise<{
    done: boolean;
    value: any;
  }>;
  throw: (err: any) => Promise<{
    done: boolean;
    value: any;
  }>;
  then: (resolve: (rows: any[]) => any, reject: (err: any) => any) => void;
  /**
   * @ignore
   */
  constructor(
    next: () => Promise<{
      done: boolean;
      value: any;
    }>,
    abort: () => Promise<{
      done: boolean;
      value: any;
    }>,
    error: (err: any) => Promise<{
      done: boolean;
      value: any;
    }>,
    then: (resolve: (rows: any[]) => any, reject: (err: any) => any) => void
  );
}
/**
 * 错误码规范：{status:T; code:number, msg: string}
 * code: 错误码
 * status: 错误类型
 * msg: 错误描述
 */
declare type CommonError<T> = {
  status: T;
  code: number;
  msg: string;
};

interface GameGUIEvent {
  entity: GamePlayerEntity;
  name: string;
  payload: any;
}
interface GameGUIEventListener {
  (event: GameGUIEvent): void;
}
declare class GameGUI {
  init: <T extends string, U extends T>(
    entity: GamePlayerEntity,
    config: GUIConfig<T, U>
  ) => Promise<void>;
  show: (
    entity: GamePlayerEntity,
    name: string,
    allowMultiple?: boolean
  ) => Promise<void>;
  remove: (entity: GamePlayerEntity, selector: string) => Promise<void>;
  getAttribute: (
    entity: GamePlayerEntity,
    selector: string,
    name: string
  ) => Promise<any>;
  setAttribute: (
    entity: GamePlayerEntity,
    selector: string,
    name: string,
    value: any
  ) => Promise<void>;
  onMessage: (listener: GameGUIEventListener) => void;
  ui: InstanceType<any>["ui"];
  constructor(
    init: <T extends string, U extends T>(
      entity: GamePlayerEntity,
      config: GUIConfig<T, U>
    ) => Promise<void>,
    show: (
      entity: GamePlayerEntity,
      name: string,
      allowMultiple?: boolean
    ) => Promise<void>,
    remove: (entity: GamePlayerEntity, selector: string) => Promise<void>,
    getAttribute: (
      entity: GamePlayerEntity,
      selector: string,
      name: string
    ) => Promise<any>,
    setAttribute: (
      entity: GamePlayerEntity,
      selector: string,
      name: string,
      value: any
    ) => Promise<void>,
    onMessage: (listener: GameGUIEventListener) => void
  );
}
declare type GameHttpFetchHeaders = {
  /**
   * 响应头名称
   */
  [name: string]: string | string[];
};
declare type GameHttpFetchRequestOptions = {
  /**
   * 请求超时时间，单位为毫秒
   */
  timeout?: number;
  /**
   * 请求方法
   */
  method?: "OPTIONS" | "GET" | "HEAD" | "PUT" | "POST" | "DELETE" | "PATCH";
  /**
   * 请求头
   */
  headers?: GameHttpFetchHeaders;
  /**
   * 请求体
   */
  body?: string | ArrayBuffer;
};
declare class GameHttpFetchResponse {
  /**
   * 状态码
   */
  status: number;
  /**
   * 状态码描述
   */
  statusText: string;
  /**
   * 所有响应头
   */
  headers: GameHttpFetchHeaders;
  /**
   * 返回一个Promise，Promise resolve的值为JSON格式的数据
   */
  json: () => Promise<any>;
  /**
   * 返回一个Promise，Promise resolve的值为文本格式的数据
   */
  text: () => Promise<string>;
  /**
   * 返回一个Promise，Promise resolve的值为二进制格式的数据
   */
  arrayBuffer: () => Promise<ArrayBuffer>;
  /**
   * 关闭连接
   */
  close: () => Promise<void>;
  constructor(
    status: number,
    statusText: string,
    headers: GameHttpFetchHeaders,
    json: () => Promise<any>,
    text: () => Promise<string>,
    arrayBuffer: () => Promise<ArrayBuffer>,
    close: () => Promise<void>
  );
  /**
   * 是否请求成功
   */
  get ok(): boolean;
}
declare class GameHttpRequest {}
declare class GameHttpResponse {}
declare type GameHttpHandler = (
  request: GameHttpRequest,
  response: GameHttpResponse
) => void;
declare class GameHttpAPI {
  /**
   * 请求网络资源
   * @param url 请求地址
   * @param options 请求配置
   * @returns 返回一个Promise，Promise resolve的值为请求结果
   */
  fetch: (
    url: string,
    options?: GameHttpFetchRequestOptions
  ) => Promise<GameHttpFetchResponse>;
  constructor(
    fetch: (
      url: string,
      options?: GameHttpFetchRequestOptions
    ) => Promise<GameHttpFetchResponse>
  );
}
/**
 * 表示一个四元数，用于游戏中的旋转计算
 */
declare class GameQuaternion {
  w: number;
  x: number;
  y: number;
  z: number;

  /**
   * 构造一个新的四元数实例
   * @param w 四元数的w分量
   * @param x 四元数的x分量
   * @param y 四元数的y分量
   * @param z 四元数的z分量
   */
  constructor(w: number, x: number, y: number, z: number);

  /**
   * 计算两个三维向量之间的旋转四元数
   * @param a 起始向量
   * @param b 目标向量
   * @returns 代表从向量a旋转到向量b的四元数
   */
  static rotationBetween(a: GameVector3, b: GameVector3): GameQuaternion;

  /**
   * 从轴角表示转换到四元数表示
   * @param axis 旋转轴
   * @param rad 旋转角度（弧度）
   * @returns 对应轴角表示的四元数
   */
  static fromAxisAngle(axis: GameVector3, rad: number): GameQuaternion;

  /**
   * 从欧拉角转换到四元数
   * @param x 绕x轴的旋转角度
   * @param y 绕y轴的旋转角度
   * @param z 绕z轴的旋转角度
   * @returns 对应欧拉角的四元数
   */
  static fromEuler(x: number, y: number, z: number): GameQuaternion;

  /**
   * 设置四元数的分量值
   * @param w 四元数的w分量
   * @param x 四元数的x分量
   * @param y 四元数的y分量
   * @param z 四元数的z分量
   * @returns 当前四元数实例
   */
  set(w: number, x: number, y: number, z: number): GameQuaternion;

  /**
   * 复制另一个四元数的值
   * @param q 要复制的四元数
   * @returns 当前四元数实例
   */
  copy(q: GameQuaternion): GameQuaternion;

  /**
   * 获取四元数的轴角表示
   * @param _q 另一个四元数（未使用）
   * @returns 包含旋转轴和旋转角度的对象
   */
  getAxisAngle(_q: GameQuaternion): {
    axis: GameVector3;
    angle: number;
  };

  /**
   * 绕x轴旋转四元数
   * @param _rad 旋转角度（弧度）
   * @returns 当前四元数实例
   */
  rotateX(_rad: number): GameQuaternion;

  /**
   * 绕y轴旋转四元数
   * @param _rad 旋转角度（弧度）
   * @returns 当前四元数实例
   */
  rotateY(_rad: number): GameQuaternion;

  /**
   * 绕z轴旋转四元数
   * @param _rad 旋转角度（弧度）
   * @returns 当前四元数实例
   */
  rotateZ(_rad: number): GameQuaternion;

  /**
   * 计算当前四元数与另一个四元数的点积
   * @param q 另一个四元数
   * @returns 点积结果
   */
  dot(q: GameQuaternion): number;

  /**
   * 将另一个四元数加到当前四元数上
   * @param v 另一个四元数
   * @returns 当前四元数实例
   */
  add(v: GameQuaternion): GameQuaternion;

  /**
   * 从当前四元数减去另一个四元数
   * @param v 另一个四元数
   * @returns 当前四元数实例
   */
  sub(v: GameQuaternion): GameQuaternion;

  /**
   * 计算当前四元数与另一个四元数之间的角度
   * @param q 另一个四元数
   * @returns 角度结果（弧度）
   */
  angle(q: GameQuaternion): number;

  /**
   * 将当前四元数与另一个四元数相乘
   * @param q 另一个四元数
   * @returns 当前四元数实例
   */
  mul(q: GameQuaternion): GameQuaternion;

  /**
   * 计算当前四元数的逆四元数
   * @returns 当前四元数实例
   */
  inv(): GameQuaternion;

  /**
   * 将当前四元数除以另一个四元数
   * @param q 另一个四元数
   * @returns 当前四元数实例
   */
  div(q: GameQuaternion): GameQuaternion;

  /**
   * 使用球面线性插值计算两个四元数之间的中间四元数
   * @param q 另一个四元数
   * @param n 插值参数，范围在0到1之间
   * @returns 插值结果四元数
   */
  slerp(q: GameQuaternion, n: number): GameQuaternion;

  /**
   * 计算四元数的模长
   * @returns 模长结果
   */
  mag(): number;

  /**
   * 计算四元数的模长的平方
   * @returns 模长平方结果
   */
  sqrMag(): number;

  /**
   * 将四元数归一化，使其模长为1
   * @returns 当前四元数实例
   */
  normalize(): GameQuaternion;

  /**
   * 检查当前四元数是否与另一个四元数近似（误差值：0.000001）相等
   * @param q 另一个四元数
   * @returns 如果相等返回true，否则返回false
   */
  equals(q: GameQuaternion): boolean;

  /**
   * 克隆当前四元数实例
   * @returns 新的四元数实例，值与当前实例相同
   */
  clone(): GameQuaternion;

  /**
   * 将四元数转换为字符串表示
   * @returns 四元数的字符串表示
   */
  toString(): string;
}
/**
 * 表示用于游戏开发的三维向量。
 * 该类提供了多种3D向量数学运算，包括加法、减法、乘法、除法、点积、叉积和向量插值。
 */
declare class GameVector3 {
  x: number;
  y: number;
  z: number;

  /**
   * 创建一个新的GameVector3实例。
   * @param x 向量的x分量。
   * @param y 向量的y分量。
   * @param z 向量的z分量。
   */
  constructor(x: number, y: number, z: number);

  /**
   * 从极坐标创建一个新的GameVector3对象。
   * @param mag 向量的模长。
   * @param phi xy平面上的角度（方位角）。
   * @param theta z轴上的角度（极角）。
   * @returns 新的GameVector3对象。
   */
  static fromPolar(mag: number, phi: number, theta: number): GameVector3;

  /**
   * 设置此向量的分量。
   * @param x 新的x分量。
   * @param y 新的y分量。
   * @param z 新的z分量。
   * @returns 本向量，用于链式操作。
   */
  set(x: number, y: number, z: number): GameVector3;

  /**
   * 将另一个向量的分量复制到此向量。
   * @param v 要复制的向量。
   * @returns 本向量，用于链式操作。
   */
  copy(v: GameVector3): GameVector3;

  /**
   * 将另一个向量加到此向量上。
   * @param v 要相加的向量。
   * @returns 本向量，用于链式操作。
   */
  add(v: GameVector3): GameVector3;

  /**
   * 从此向量中减去另一个向量。
   * @param v 要相减的向量。
   * @returns 本向量，用于链式操作。
   */
  sub(v: GameVector3): GameVector3;

  /**
   * 按分量将此向量与另一个向量相乘。
   * @param v 要相乘的向量。
   * @returns 本向量，用于链式操作。
   */
  mul(v: GameVector3): GameVector3;

  /**
   * 按分量将此向量与另一个向量相除。
   * @param v 要相除的向量。
   * @returns 本向量，用于链式操作。
   */
  div(v: GameVector3): GameVector3;

  /**
   * 将另一个向量加到此向量上并更新此向量。
   * @param v 要相加的向量。
   * @returns 本向量，用于链式操作。
   */
  addEq(v: GameVector3): GameVector3;

  /**
   * 从此向量中减去另一个向量并更新此向量。
   * @param v 要相减的向量。
   * @returns 本向量，用于链式操作。
   */
  subEq(v: GameVector3): GameVector3;

  /**
   * 按分量将此向量与另一个向量相乘并更新此向量。
   * @param v 要相乘的向量。
   * @returns 本向量，用于链式操作。
   */
  mulEq(v: GameVector3): GameVector3;

  /**
   * 按分量将此向量与另一个向量相除并更新此向量。
   * @param v 要相除的向量。
   * @returns 本向量，用于链式操作。
   */
  divEq(v: GameVector3): GameVector3;

  /**
   * 计算此向量与另一个向量的点积。
   * @param v 另一个向量。
   * @returns 点积。
   */
  dot(v: GameVector3): number;

  /**
   * 计算此向量与另一个向量的叉积。
   * @param v 另一个向量。
   * @returns 叉积。
   */
  cross(v: GameVector3): GameVector3;

  /**
   * 按标量缩放此向量。
   * @param n 标量。
   * @returns 本向量，用于链式操作。
   */
  scale(n: number): GameVector3;

  /**
   * 创建此向量的副本。
   * @returns 新的GameVector3对象。
   */
  clone(): GameVector3;

  /**
   * 线性插值此向量朝向另一个向量。
   * @param v 目标向量。
   * @param n 插值因子。
   * @returns 本向量，用于链式操作。
   */
  lerp(v: GameVector3, n: number): GameVector3;

  /**
   * 计算此向量的模长。
   * @returns 模长。
   */
  mag(): number;

  /**
   * 计算此向量的模长平方。
   * @returns 模长平方。
   */
  sqrMag(): number;

  /**
   * 计算并返回指向目标位置的向量
   * @param v 目标位置的三维向量，表示目标点在游戏世界中的坐标
   * @returns 返回一个从当前点指向目标点的三维向量
   */
  towards(v: GameVector3): GameVector3;

  /**
   * 计算此向量与另一个向量之间的距离。
   * @param v 另一个向量。
   * @returns 距离。
   */
  distance(v: GameVector3): number;

  /**
   * 归一化此向量。
   * @returns 本向量，用于链式操作。
   */
  normalize(): GameVector3;

  /**
   * 计算此向量与另一个向量之间的夹角。
   * @param v 另一个向量。
   * @returns 夹角（弧度）。
   */
  angle(v: GameVector3): number;

  /**
   * 计算此向量与另一个向量的按分量最大值。
   * @param v 另一个向量。
   * @returns 本向量，用于链式操作。
   */
  max(v: GameVector3): GameVector3;

  /**
   * 计算此向量与另一个向量的按分量最小值。
   * @param v 另一个向量。
   * @returns 本向量，用于链式操作。
   */
  min(v: GameVector3): GameVector3;

  /**
   * 检查此向量是否完全等于另一个向量。
   * @param v 另一个向量。
   * @returns 如果向量完全相等则返回true，否则返回false。
   */
  exactEquals(v: GameVector3): boolean;

  /**
   * 检查此向量是否近似（误差值：0.000001）等于另一个向量。
   * @param v 另一个向量。
   * @returns 如果向量近似相等则返回true，否则返回false。
   */
  equals(v: GameVector3): boolean;

  /**
   * 将此向量转换为字符串。
   * @returns 此向量的字符串表示形式。
   */
  toString(): string;
}
/**
 * 表示一个三维游戏区域的边界
 */
declare class GameBounds3 {
  /**
   * 区域的低处顶点
   */
  lo: GameVector3;

  /**
   * 区域的高处顶点
   */
  hi: GameVector3;

  /**
   * 构造一个新的三维游戏区域边界对象
   * @param lo 区域的低处顶点
   * @param hi 区域的高处顶点
   */
  constructor(lo: GameVector3, hi: GameVector3);

  /**
   * 根据多个点创建一个三维游戏区域边界对象
   * @param points 用于定义边界的点数组
   * @returns 一个新的三维游戏区域边界对象
   */
  static fromPoints(...points: GameVector3[]): GameBounds3;

  /**
   * 计算当前边界与另一个边界的交集
   * @param b 另一个边界对象
   * @returns 交集边界对象
   */
  intersect(b: GameBounds3): GameBounds3;

  /**
   * 检查当前边界是否包含给定点
   * @param b 要检查的点
   * @returns 如果当前边界包含该点，则返回true；否则返回false
   */
  contains(b: GameVector3): boolean;

  /**
   * 检查当前边界是否完全包含另一个边界
   * @param b 要检查的边界对象
   * @returns 如果当前边界完全包含另一个边界，则返回true；否则返回false
   */
  containsBounds(b: GameBounds3): boolean;

  /**
   * 检查当前边界是否与另一个边界相交
   * @param b 另一个边界对象
   * @returns 如果当前边界与另一个边界相交，则返回true；否则返回false
   */
  intersects(b: GameBounds3): boolean;

  /**
   * 设置当前边界的低处和高处顶点坐标
   * @param lox 低处顶点的x坐标
   * @param loy 低处顶点的y坐标
   * @param loz 低处顶点的z坐标
   * @param hix 高处顶点的x坐标
   * @param hiy 高处顶点的y坐标
   * @param hiz 高处顶点的z坐标
   * @returns 当前的三维游戏区域边界对象
   */
  set(
    lox: number,
    loy: number,
    loz: number,
    hix: number,
    hiy: number,
    hiz: number
  ): GameBounds3;

  /**
   * 复制另一个边界对象的属性到当前边界对象
   * @param b 要复制的边界对象
   * @returns 当前的三维游戏区域边界对象
   */
  copy(b: GameBounds3): GameBounds3;

  /**
   * 返回当前边界对象的字符串表示
   * @returns 当前边界对象的字符串表示
   */
  toString(): string;
}
/**
 * GameRGBAColor 类用于表示和操作具有红（r）、绿（g）、蓝（b）和透明度（a）分量的颜色值。
 * 它提供了一系列方法来设置、复制、比较颜色值，以及进行颜色间的数学运算。
 */
declare class GameRGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;

  /**
   * 构造一个 GameRGBAColor 实例。
   * @param r 红色分量，取值范围为 0 到 1。
   * @param g 绿色分量，取值范围为 0 到 1。
   * @param b 蓝色分量，取值范围为 0 到 1。
   * @param a 透明度分量，取值范围为 0 到 1，其中 0 表示完全透明，1 表示完全不透明。
   */
  constructor(r: number, g: number, b: number, a: number);

  /**
   * 设置颜色的红、绿、蓝和透明度分量。
   * @param r 红色分量。
   * @param g 绿色分量。
   * @param b 蓝色分量。
   * @param a 透明度分量。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  set(r: number, g: number, b: number, a: number): GameRGBAColor;

  /**
   * 复制一个颜色值到当前颜色实例。
   * @param c 要复制的颜色值。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  copy(c: GameRGBAColor): GameRGBAColor;

  /**
   * 将另一个颜色值与当前颜色相加。
   * @param rgba 要相加的颜色值。
   * @returns 返回一个新的 GameRGBAColor 实例，表示相加后的颜色。
   */
  add(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 从当前颜色中减去另一个颜色值。
   * @param rgba 要减去的颜色值。
   * @returns 返回一个新的 GameRGBAColor 实例，表示相减后的颜色。
   */
  sub(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 将当前颜色与另一个颜色值相乘。
   * @param rgba 要相乘的颜色值。
   * @returns 返回一个新的 GameRGBAColor 实例，表示相乘后的颜色。
   */
  mul(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 将当前颜色除以另一个颜色值。
   * @param rgba 要除以的颜色值。
   * @returns 返回一个新的 GameRGBAColor 实例，表示相除后的颜色。
   */
  div(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 将另一个颜色值与当前颜色相加，并更新当前颜色值。
   * @param rgba 要相加的颜色值。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  addEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 从当前颜色中减去另一个颜色值，并更新当前颜色值。
   * @param rgba 要减去的颜色值。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  subEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 将当前颜色与另一个颜色值相乘，并更新当前颜色值。
   * @param rgba 要相乘的颜色值。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  mulEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 将当前颜色除以另一个颜色值，并更新当前颜色值。
   * @param rgba 要除以的颜色值。
   * @returns 返回当前 GameRGBAColor 实例，支持链式调用。
   */
  divEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * 对当前颜色与另一个颜色值进行线性插值。
   * @param rgba 要进行线性插值的颜色值。
   * @param n 插值因子，决定了结果颜色中当前颜色和目标颜色的权重。
   * @returns 返回一个新的 GameRGBAColor 实例，表示插值后的颜色。
   */
  lerp(rgba: GameRGBAColor, n: number): GameRGBAColor;

  /**
   * 将当前颜色与一个 RGB 颜色进行混合，并更新当前颜色值。
   * @param rgb 要混合的 RGB 颜色。
   * @returns 返回一个新的 GameRGBColor 实例，表示混合后的颜色。
   */
  blendEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * 比较当前颜色是否与近似（误差值：0.000001）等于另一个颜色。
   * @param rgba 要比较的颜色。
   * @returns 如果两个颜色相等，则返回 true；否则返回 false。
   */
  equals(rgba: GameRGBAColor): boolean;

  /**
   * 克隆当前颜色实例。
   * @returns 返回一个新的 GameRGBAColor 实例，具有与当前颜色相同的值。
   */
  clone(): GameRGBAColor;

  /**
   * 将当前颜色转换为字符串表示。
   * @returns 返回当前颜色的字符串表示。
   */
  toString(): string;
}
/**
 * GameRGBColor 类用于表示和操作 RGB 颜色值。
 * 它提供了设置、复制、运算、插值和比较颜色的功能。
 */
declare class GameRGBColor {
  r: number;
  g: number;
  b: number;

  /**
   * 生成一个随机的 GameRGBColor 实例。
   * @returns {GameRGBColor} 一个随机的 GameRGBColor 实例。
   */
  static random(): GameRGBColor;

  /**
   * 创建一个 GameRGBColor 实例。
   * @param {number} r 红色分量值，取值范围为 0 到 1。
   * @param {number} g 绿色分量值，取值范围为 0 到 1。
   * @param {number} b 蓝色分量值，取值范围为 0 到 1。
   */
  constructor(r: number, g: number, b: number);

  /**
   * 设置颜色的 RGB 分量值。
   * @param {number} r 红色分量值。
   * @param {number} g 绿色分量值。
   * @param {number} b 蓝色分量值。
   * @returns {GameRGBColor} 当前的 GameRGBColor 实例。
   */
  set(r: number, g: number, b: number): GameRGBColor;

  /**
   * 复制一个颜色到当前颜色实例。
   * @param {GameRGBColor} c 要复制的颜色。
   * @returns {GameRGBColor} 当前的 GameRGBColor 实例。
   */
  copy(c: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色与另一个颜色相加。
   * @param {GameRGBColor} rgb 要相加的颜色。
   * @returns {GameRGBColor} 两个颜色相加的结果。
   */
  add(rgb: GameRGBColor): GameRGBColor;

  /**
   * 从当前颜色中减去另一个颜色。
   * @param {GameRGBColor} rgb 要减去的颜色。
   * @returns {GameRGBColor} 两个颜色相减的结果。
   */
  sub(rgb: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色与另一个颜色相乘。
   * @param {GameRGBColor} rgb 要相乘的颜色。
   * @returns {GameRGBColor} 两个颜色相乘的结果。
   */
  mul(rgb: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色除以另一个颜色。
   * @param {GameRGBColor} rgb 要除以的颜色。
   * @returns {GameRGBColor} 两个颜色相除的结果。
   */
  div(rgb: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色与另一个颜色相加，并更新当前颜色。
   * @param {GameRGBColor} rgb 要相加的颜色。
   * @returns {GameRGBColor} 更新后的当前颜色。
   */
  addEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * 从当前颜色中减去另一个颜色，并更新当前颜色。
   * @param {GameRGBColor} rgb 要减去的颜色。
   * @returns {GameRGBColor} 更新后的当前颜色。
   */
  subEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色与另一个颜色相乘，并更新当前颜色。
   * @param {GameRGBColor} rgb 要相乘的颜色。
   * @returns {GameRGBColor} 更新后的当前颜色。
   */
  mulEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * 将当前颜色除以另一个颜色，并更新当前颜色。
   * @param {GameRGBColor} rgb 要除以的颜色。
   * @returns {GameRGBColor} 更新后的当前颜色。
   */
  divEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * 在当前颜色与另一个颜色之间进行线性插值。
   * @param {GameRGBColor} rgb 要插值的另一个颜色。
   * @param {number} n 插值因子，范围在 0 到 1 之间。
   * @returns {GameRGBColor} 插值后的颜色。
   */
  lerp(rgb: GameRGBColor, n: number): GameRGBColor;

  /**
   * 比较当前颜色与另一个颜色是否近似（误差值：0.000001）相等。
   * @param {GameRGBColor} rgb 要比较的另一个颜色。
   * @returns {boolean} 如果两个颜色相等则返回 true，否则返回 false。
   */
  equals(rgb: GameRGBColor): boolean;

  /**
   * 克隆当前颜色实例。
   * @returns {GameRGBColor} 当前颜色的克隆。
   */
  clone(): GameRGBColor;

  /**
   * 将当前颜色转换为 RGBA 格式。
   * @returns {GameRGBAColor} 当前颜色的 RGBA 表示。
   */
  toRGBA(): GameRGBAColor;

  /**
   * 返回当前颜色的字符串表示。
   * @returns {string} 当前颜色的字符串表示。
   */
  toString(): string;
}

declare class ServerRemoteChannel {
  /**
   * 服务端 发送至 客户端，向指定玩家发送事件。
   */
  sendClientEvent<T = any>(
    entities: GamePlayerEntity | GamePlayerEntity[],
    clientEvent: T
  ): void;
  /**
   * 服务端 发送至 客户端，向所有玩家发送事件。
   */
  broadcastClientEvent<T = any>(clientEvent: T): void;
  /**
   * 监听 客户端 发来的事件
   */
  onServerEvent<T = any>(
    handler: (event: {
      /**
       * 服务端当前时间
       */
      tick: number;
      /**
       * 发送者实体
       */
      entity: GamePlayerEntity;
      /**
       * 事件参数
       */
      args: T;
    }) => void
  ): GameEventHandlerToken;

  constructor(
    sendClientEvent: SendClientEventType,
    broadcastClientEvent: (clientEvent: any) => void,
    onServerEvent: GameEventChannel<ServerEvent>
  );
}

declare class GameRTCChannel {
  /**
   * 向该通道加入一个玩家
   */
  add: (entity: GamePlayerEntity) => Promise<void>;
  /**
   * 从该通道移除一个玩家
   */
  remove: (entity: GamePlayerEntity) => Promise<void>;
  /**
   * 停止向该通道发布麦克风
   */
  unpublish: (entity: GamePlayerEntity) => Promise<void>;
  /**
   * 允许玩家发布麦克风
   */
  publishMicrophone: (entity: GamePlayerEntity) => Promise<void>;
  /**
   * 获取该通道内的玩家列表
   */
  getPlayers: () => Promise<GamePlayerEntity[]>;
  /**
   * 销毁该通道
   */
  destroy: () => Promise<void>;
  /**
   * 获取玩家音量
   * @param entity
   */
  getVolume: (entity: GamePlayerEntity) => Promise<number>;
  /**
   * 设置玩家音量
   * @param entity
   */
  setVolume: (entity: GamePlayerEntity, volume: number) => Promise<void>;
  /**
   * 获取玩家麦克风权限
   * @param entity
   */
  getMicrophonePermission: (entity: GamePlayerEntity) => Promise<boolean>;
  constructor(
    add: (entity: GamePlayerEntity) => Promise<void>,
    remove: (entity: GamePlayerEntity) => Promise<void>,
    unpublish: (entity: GamePlayerEntity) => Promise<void>,
    publishMicrophone: (entity: GamePlayerEntity) => Promise<void>,
    getPlayers: () => Promise<GamePlayerEntity[]>,
    destroy: () => Promise<void>,
    getVolume: (entity: GamePlayerEntity) => Promise<number>,
    setVolume: (entity: GamePlayerEntity, volume: number) => Promise<void>,
    getMicrophonePermission: (entity: GamePlayerEntity) => Promise<boolean>
  );
}
declare class GameRTC {
  /**
   * 新建一个rtc通道
   * @param channelId 默认为空，表示创建一个随机的channelId
   */
  createChannel: (channelId?: string) => Promise<GameRTCChannel>;
  constructor(createChannel: (channelId?: string) => Promise<GameRTCChannel>);
}

declare type DB_ERROR_STATUS =
  | "CONSTRAINT_TARGET_INVALID"
  | "PARAMS_INVALID"
  | "DB_NAME_INVALID"
  | "KEY_INVALID"
  | "VALUE_INVALID"
  | "SERVER_FETCH_ERROR"
  | "REQUEST_THROTTLED"
  | "UNKNOWN";
declare class GameStorage implements I.GameStorage {
  /**
   * 连接指定数据存储空间，如果不存在则创建一个新的空间。
   * 只能在本地图使用此空间，其他地图（如副图）无法访问此空间，从而避免全局污染。
   */
  getDataStorage<T = JSONValue>(key: string): GameDataStorage<T>;
  /**
   * 连接指定数据存储空间，如果不存在则创建一个新的空间。
   * 此方法为主图和副图共同维护的数据存储空间。
   */
  getGroupStorage<T = JSONValue>(key: string): GameDataStorage<T> | undefined;
  constructor(
    getDataStorage: (key: string) => GameDataStorage,
    getGroupStorage: (key: string) => GameDataStorage | undefined
  );
}
declare type ResultValue<T> =
  | {
      /**
       * 数据键名
       */
      key: string;
      /**
       * 数据值
       */
      value: T;
      /**
       * 数据版本号
       */
      version: string;
      /**
       * 数据更新时间
       */
      updateTime: number;
      /**
       * 数据创建时间
       */
      createTime: number;
    }
  | undefined;
declare type ListReturnValue<T> = {
  /**
   * 数据列表
   */
  items: ResultValue<T>[];
  /**
   * 是否为最后一页
   */
  isLastPage: boolean;
};
declare type ReturnValue<T> = ResultValue<T>;
declare type ListPageOptions = {
  /**
   * 分页指针，用于指定本次获取的分页起点页码。
   * 第一页从0开始。展示第1项至第{pageSize}项数据。
   */
  cursor: number;
  /**
   * 分页大小，一页内的数据量，取值范围[0,100]，默认100。
   */
  pageSize?: number;
  /**
   * - 约束目标值的路径，当值是JSON格式时，指定用作排序的值的路径。例如传入 score时，会取值上score属性的值作为排序、最大最小值的限制目标；
   * - 可以级联最多5级，例如a.b.c.d.e，超出视作非法参数，按下一条方式处理；
   * - 当路径不存在或传入非法参数时，以值本身作为目标进行排序，并打印一条警告；
   */
  constraintTarget?: string;
  /**
   * 是否升序，设置为 true 时为升序，false为降序，不传或传入undefined时不排序；
   */
  ascending?: boolean;
  /**
   * 最大值，过滤返回对应值的最大值，超出或非数字则不返回该Key，默认不过滤；
   */
  max?: number;
  /**
   * 最小值，过滤返回对应值的最小值，超出或非数字则不返回该Key，默认不过滤；
   */
  min?: number;
};

declare class GameDataStorage<T> implements I.GameDataStorage {
  /**
   * 数据存储空间名称
   */
  readonly key: string;
  /**
   * 原子方式递增给定键的值，当对应键不存在时视作设置值，对应值不为数字时报错。
   * - 通过此方式修改值时不会触发数据锁定。
   * @param key 需要递增的键
   * @param value 递增量，默认为 1
   * @returns 返回累加后的数值
   */
  increment: (key: string, value?: number) => Promise<number>;
  /**
   * 设置数据
   * @param key 数据键名
   * @param value 数据值
   */
  set: (key: string, value: T) => Promise<void>;
  /**
   * 更新数据
   * @param key 数据键名
   * @param handler 数据更新处理器
   * @returns 返回更新后的数据
   */
  update: (
    key: string,
    handler: (prevValue: ReturnValue<T>) => T
  ) => Promise<void>;
  /**
   * 获取数据
   * @param key 数据键名
   * @returns 返回数据
   */
  get: (key: string) => Promise<ReturnValue<T>>;
  /**
   * 获取数据列表
   * @param options 分页参数
   * @returns 返回数据列表
   */
  list: (options: ListPageOptions) => Promise<QueryList<T>>;
  /**
   * 删除数据
   * @param key 数据键名
   * @returns 返回删除的数据
   */
  remove: (key: string) => Promise<ReturnValue<T>>;
  /**
   * 销毁数据存储空间
   */
  destroy: () => Promise<void>;
  constructor(
    key: string,
    set: (key: string, value: JSONValue) => Promise<void>,
    update: (
      key: string,
      handler: (prevValue: ReturnValue) => JSONValue
    ) => Promise<void>,
    get: (key: string) => Promise<ReturnValue>,
    list: (options: ListPageOptions) => Promise<QueryList>,
    remove: (key: string) => Promise<ReturnValue>,
    destroy: () => Promise<void>
  );
}
declare class QueryList<T> implements I.QueryList {
  /**
   * 	按 {QueryList | pageSize} 获取当前页的键值对，返回当前页的键值对内容
   */
  getCurrentPage: () => ReturnValue<T>[];
  /**
   * 翻到下一页，执行后 {getCurrentPage} 将返回下一页的键值对内容
   */
  nextPage: () => Promise<void>;
  /**
   * 是否为最后一页，如果翻过头了，也会为 true
   */
  isLastPage: boolean;
  constructor(
    getCurrentPage: () => ReturnValue[],
    nextPage: () => Promise<void>
  );
}
/**
 * URLSearchParams 类用于处理 URL 查询字符串中的参数部分
 * 它提供了一系列方法来添加、删除、获取和操作查询参数
 */
declare class URLSearchParams {
  /**
   * 构造函数，用于创建一个新的 URLSearchParams 对象
   * @param args 初始化查询参数的对象或字符串
   */
  constructor(args: any);

  /**
   * 为指定的查询参数追加一个值
   * @param name 查询参数的名称
   * @param value 查询参数的值
   */
  append(name: string, value: string): void;

  /**
   * 删除指定的查询参数及其值
   * @param name 要删除的查询参数的名称
   */
  delete(name: string): void;

  /**
   * 获取指定查询参数的值
   * 如果该参数不存在，则返回 null
   * @param name 查询参数的名称
   * @returns 查询参数的值或 null
   */
  get(name: string): string | null;

  /**
   * 获取指定查询参数的所有值
   * @param name 查询参数的名称
   * @returns 查询参数的值的数组
   */
  getAll(name: string): string[];

  /**
   * 遍历查询参数，执行回调函数
   * @param callback 每个查询参数执行的回调函数
   */
  forEach(
    callback: (
      this: URLSearchParams,
      value: string,
      key: string,
      url: URLSearchParams
    ) => any
  ): void;

  /**
   * 检查是否存在指定的查询参数
   * @param name 查询参数的名称
   * @returns 如果存在则返回 true，否则返回 false
   */
  has(name: string): boolean;

  /**
   * 设置指定查询参数的值
   * 如果该参数已存在，则替换其值
   * @param name 查询参数的名称
   * @param value 查询参数的值
   */
  set(name: string, value: string): void;

  /**
   * 返回一个包含所有查询参数名称的迭代器
   * @returns 查询参数名称的迭代器
   */
  keys(): IterableIterator<string>;

  /**
   * 返回一个包含所有查询参数值的迭代器
   * @returns 查询参数值的迭代器
   */
  values(): IterableIterator<string>;

  /**
   * 返回一个包含所有查询参数及其值的迭代器
   * 每个元素是一个包含名称和值的数组
   * @returns 查询参数及其值的迭代器
   */
  entries(): IterableIterator<string[]>;

  /**
   * 对查询参数进行排序
   * 注意：排序后的参数可能不再与原始 URL 的顺序相同
   */
  sort(): void;

  /**
   * 将查询参数转换为字符串
   * @returns 查询参数的字符串表示
   */
  toString(): string;

  /**
   * 返回一个包含所有查询参数及其值的迭代器
   * 与 entries 方法的返回值相同
   * @returns 查询参数及其值的迭代器
   */
  [Symbol.iterator](): IterableIterator<string[]>;
}
/**
 * URL 类用于解析和操作统一资源定位符（URL）。
 * 它提供了一系列的属性和方法，用于获取和设置URL的各个组成部分。
 * @param url 要解析的URL字符串。
 * @param base 可选的基准URL，用于解析相对URL。
 */
declare class URL {
  constructor(url: any, base?: any);

  /**
   * 获取或设置URL的片段标识符（hash）部分。
   */
  get hash(): string;
  set hash(value: string);

  /**
   * 获取或设置URL的主机名和端口号部分。
   */
  get host(): string;
  set host(value: string);

  /**
   * 获取或设置URL的主机名部分。
   */
  get hostname(): any;
  set hostname(value: any);

  /**
   * 获取或设置URL的端口号部分。
   */
  get port(): string;
  set port(value: string);

  /**
   * 获取或设置整个URL字符串表示。
   */
  get href(): string;
  set href(value: string);

  /**
   * 获取URL的源（协议、主机名和端口号）部分。
   */
  get origin(): string;

  /**
   * 获取或设置URL的用户名部分。
   */
  get username(): string;
  set username(value: string);

  /**
   * 获取或设置URL的密码部分。
   */
  get password(): string;
  set password(value: string);

  /**
   * 获取或设置URL的路径名部分。
   */
  get pathname(): string;
  set pathname(value: string);

  /**
   * 获取或设置URL的协议部分。
   */
  get protocol(): string;
  set protocol(value: string);

  /**
   * 获取或设置URL的查询字符串部分。
   */
  get search(): string;
  set search(value: string);

  /**
   * 获取URL的查询参数对象。
   */
  get searchParams(): URLSearchParams;

  /**
   * 将URL对象转换为字符串。
   * @returns URL字符串。
   */
  toString(): string;

  /**
   * 将URL对象转换为JSON字符串。
   * @returns URL字符串。
   */
  toJSON(): string;
}

/**
 * 延迟指定毫秒后返回一个resolve的Promise对象。
 * @param ms - 延迟的毫秒数。
 * @returns 一个Promise，在指定的毫秒数后resolve。
 * @example
 *
 * // 返回Promise，有两种基本用法
 * // #1
 *
 * sleep(1000).then(() => {
 *   console.log('这句话将在一秒后输出。')
 * })
 *
 * // #2
 *
 * (async () => {
 *     await sleep(1000);
 *     console.log('这句话将在一秒后输出。')
 * })();
 */
declare function sleep(ms: number): Promise<void>;
/**
 * 用于延迟执行函数的计时器，delayMs毫秒后异步执行回调函数callback。
 * 该函数自身是同步的，返回用于清除此计时器的ID，可在 clearTimeout 中使用。
 * @param callback - 要延迟执行的回调函数。
 * @param delayMs - 延迟的毫秒数。
 * @returns 用于清除计时器的ID。
 */
declare function setTimeout(callback: Function, delayMs: number): number;
/**
 * 用于清除传入ID对应的 setTimeout 计时器。
 * @param id - 要清除的计时器的ID。
 */
declare function clearTimeout(id: number): void;
/**
 * 用于定时执行函数的计时器，每 delayMs 毫秒后异步执行回调函数 callback。
 * 该函数自身是同步的，返回用于清除此计时器的ID，可在 clearInterval 中使用。
 * @param callback - 要定时执行的回调函数。
 * @param delayMs - 间隔的毫秒数。
 * @returns 用于清除计时器的ID。
 */
declare function setInterval(callback: Function, delayMs: number): number;
/**
 * 用于清除传入ID对应的 setInterval 计时器。
 * @param id - 要清除的计时器的ID。
 */
declare function clearInterval(id: number): void;
