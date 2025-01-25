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
 * 目前仅在客户端 webpack.config.js 有效
 */
declare const __dirname: string;

/**
 * 事件处理模块
 */
declare class EventEmitter<EventMap extends Record<string, any>> {
  /**
   * 监听指定的事件。
   * @param type - 监听的事件类型，是个字符串。
   * @param listener - 监听到事件类型后的处理函数。
   */
  on<K extends keyof EventMap>(
    type: K,
    listener: (event: EventMap[K]) => void
  ): void;
  /**
   * 与 on 的区别是仅触发一次。
   * @param type - 监听的事件类型，是个字符串。
   * @param listener - 监听到事件类型后的处理函数。
   */
  once<K extends keyof EventMap>(
    type: K,
    listener: (event: EventMap[K]) => void
  ): void;
  /**
   * 移除找到的第一个 listener。
   * @param type - 要移除的事件类型。
   * @param listener - 要移除的事件处理函数。
   */
  remove<K extends keyof EventMap>(
    type: K,
    listener: (event: EventMap[K]) => void
  ): void;
  /**
   * 移除找到的所有 listener，不传则移除事件下所有。
   * @param type - 要移除的事件类型。
   * @param listener - 可选，要移除的事件处理函数。
   */
  removeAll<K extends keyof EventMap>(
    type?: K,
    listener?: (event: EventMap[K]) => void
  ): void;
  /**
   * 与 on 是同一个方法，只是方法名不同。
   * @param type - 监听的事件类型，是个字符串。
   * @param listener - 监听到事件类型后的处理函数。
   */
  add<K extends keyof EventMap>(
    type: K,
    listener: (event: EventMap[K]) => void
  ): void;
  /**
   * 与 remove 是同一个方法，只是方法名不同。
   * @param type - 要移除的事件类型。
   * @param listener - 要移除的事件处理函数。
   */
  off<K extends keyof EventMap>(
    type: K,
    listener: (event: EventMap[K]) => void
  ): void;
  /**
   * 触发指定的事件
   */
  emit<K extends keyof EventMap>(type: K, event: EventMap[K]): void;
}
/**
 * 客户端与服务端通信通道
 */
declare type ClientRemoteChannelEvents = {
  client: any;
};
/**
 * 客户端与服务端通信通道
 */
declare class ClientRemoteChannel {
  /**
   * 向服务端发送数据。
   */
  sendServerEvent<T = any>(event: T): void;
  /**
   * 监听服务端发来的数据事件。
   */
  onClientEvent<T = any>(handler: (event: T) => void): void;
  /**
   * 事件管理器。
   */
  readonly events: EventEmitter<ClientRemoteChannelEvents>;
}
/**
 * 图像映射中区域的坐标
 */
declare class Coord2 {
  /**
   * 节点坐标的偏移量。
   */
  readonly offset: Vec2;
  /**
   * 节点坐标的缩放比。
   */
  readonly scale: Vec2;
  /**
   * 按创建并返回一个新的Coord2，该Coord2初始offset和scale为{}。
   * @param val - 节点坐标数据。
   */
  static create(val?: Coord2 | { offset: Vec2; scale: Vec2 }): Coord2;
}
/**
 * 二维向量
 */
declare class Vec2 {
  /**
   * Vec2的x坐标。
   */
  x: number;
  /**
   * Vec2的y坐标。
   */
  y: number;
  /**
   * 复制给定的Vec2的x和y到当前Vec2。
   * @param val - 节点坐标数据。
   */
  copy(val: Vec2): void;
  /**
   * 创建并返回一个新的Vec2。如果提供了一个Vec2作为参数，新的Vec2的x和y将被设置为给定Vec2的x和y。如果没有提供参数，新的Vec2的x和y将被设置为0。
   * @param val - 节点坐标数据。
   */
  static create(val?: Vec2 | { x: number; y: number }): Vec2;
}
/**
 * 三维向量 & RGB颜色
 */
declare class Vec3 {
  /**
   * Vec3的x坐标。
   */
  x: number;
  /**
   * Vec3的y坐标。
   */
  y: number;
  /**
   * Vec3的z坐标。
   */
  z: number;
  /**
   * Vec3的r颜色值。范围：0-255
   */
  r: number;
  /**
   * Vec3的g颜色值。范围：0-255
   */
  g: number;
  /**
   * Vec3的b颜色值。范围：0-255
   */
  b: number;
  /**
   * 复制给定的Vec3的x和y到当前Vec3。
   * @param val - 节点坐标数据。
   */
  copy(val: Vec3): void;
  /**
   * 创建并返回一个新的Vec3。如果提供了一个Vec3作为参数，新的Vec3的x、y和z将被设置为给定Vec3的x、y和z。如果没有提供参数，新的Vec3的x、y和z将被设置为0。
   * @param val - 节点坐标数据。
   */
  static create(
    val?:
      | Vec3
      | { x: number; y: number; z: number }
      | { r: number; g: number; b: number }
  ): Vec3;
}
/**
 * UI事件
 */
interface UiEvent<T = UiNode> {
  /**
   * 触发事件的节点。
   */
  target: T;
}

/**
 * UI事件管理器
 */
declare type UiNodeEvents<T = UiNode> = {
  /**
   * 鼠标按下。
   */
  pointerdown: UiEvent<T>;
  /**
   * 鼠标抬起。
   */
  pointerup: UiEvent<T>;
};

/**
 * UI输入事件管理器
 */
declare type UiInputEvents = {
  /**
   * 获得焦点。
   */
  focus: UiEvent<UiInput>;
  /**
   * 失去焦点。
   */
  blur: UiEvent<UiInput>;
} & UiNodeEvents<UiInput>;

/**
 * 屏幕事件管理器
 */
declare type ScreenEvents = {
  /**
   * 当屏幕尺寸发生变化时，携带新的屏幕宽度和高度。
   */
  resize: ScreenResizeEvent;
};

/**
 * 客户端屏幕分辨率
 */
declare type ScreenResizeEvent = {
  /**游戏屏幕的宽度 */
  screenWidth: number;
  /**游戏屏幕的高度 */
  screenHeight: number;
};

/**
 * 客户端屏幕
 */
declare class ClientScreen {
  /**
   * 一个只读的事件发射器，用于处理用户界面屏幕事件
   */
  readonly events: EventEmitter<ScreenEvents>;
}

/**
 * 基础节点
 */
declare class UiNode {
  /**
   * 该节点的标识，可重复。
   */
  name: string;
  /**
   * 节点的子节点。如需要调整子节点结构，应修改子节点的parent属性。
   */
  readonly children: ReadonlyArray<UiNode>;
  /**
   * 节点的父节点，非根节点的父节点为空时，该节点将不会被渲染。
   */
  parent: UiNode | undefined;
  /**
   * 按名称查找子节点，返回对应子节点对象。（节点名称可在编辑模式下的属性面板中查看）
   * @param name - 子节点名称。
   */
  findChildByName<T extends UiBox | UiText | UiInput | UiImage>(
    name: string
  ): T | undefined;
  /**
   * 管理节点相关的事件。
   */
  events: EventEmitter<UiNodeEvents>;
  /**
   * 节点等比例缩放数据。
   */
  uiScale: UiScale | undefined;
  /**
   * 克隆节点，包括其子节点。
   */
  clone: () => this;
}

/**
 * UI可渲染的基类
 */
declare class UiRenderable extends UiNode {
  /**
   * 节点的锚点，用于确定节点的位置。
   */
  readonly anchor: Vec2;
  /**
   * 节点的位置，相对于父节点的位置。
   */
  readonly position: Coord2;
  /**
   * 节点的背景颜色。
   */
  readonly backgroundColor: Vec3;
  /**
   * 节点的背景透明度。
   */
  backgroundOpacity: number;
  /**
   * 节点的尺寸。
   */
  readonly size: Coord2;
  /**
   * 节点的层级，用于确定节点的渲染顺序。
   */
  zIndex: number;
  /**
   * 节点的自动调整尺寸的方式。
   */
  autoResize: "NONE" | "X" | "Y" | "XY";
  /**
   * 节点的可见性。
   */
  visible: boolean;
  /**
   * 配置鼠标指针事件的响应方式
   */
  pointerEventBehavior: PointerEventBehavior;
}
/**
 * UI盒子
 */
declare class UiBox extends UiRenderable {
  private constructor();
  /**
   * 事件管理器。
   */
  readonly events: EventEmitter<UiNodeEvents<UiBox>>;
  /**
   * 创建一个新的 Ui盒子 实例。
   */
  static create(): UiBox;
}

/**
 * UI文本
 */
declare class UiText extends UiRenderable {
  /**
   * 事件管理器。
   */
  readonly events: EventEmitter<UiNodeEvents<UiText>>;
  /**
   * 文本元素的内容，支持转义字符与换行，会对自身元素的自适应大小产生影响。
   * - 换行后，所有受到元素大小影响的属性，均需以新的大小进行计算，
   * - 当{@link UiText.richText}为真时，将开启富文本解析。
   */
  textContent: string;
  /**
   * 富文本标记，表示内容是否支持富文本格式
   * 当前支持的xml标签有：
   * - &lt;font size=&quot;16&quot; color=&quot;#D03737&quot;&gt;内容&lt;/font&gt;
   * - &lt;stroke color=&quot;#00FFFF&quot; thickness=&quot;10&quot; opacity=&quot;0.6&quot;&gt;内容&lt;/stroke&gt;
   */
  richText: boolean;
  /**
   * 节点显示的文本的字体大小。
   */
  textFontSize: number;
  /**
   * 节点显示的文本的颜色。
   */
  readonly textColor: Vec3;
  /**
   * 节点显示的文本的水平对齐方式。
   */
  textXAlignment: "Center" | "Left" | "Right";
  /**
   * 节点显示的文本的垂直对齐方式。
   */
  textYAlignment: "Center" | "Top" | "Bottom";
  /**
   * 是否开启自动换行。
   */
  autoWordWrap: boolean;
  /**
   * 文本的行高。
   */
  textLineHeight: number;
  /**
   * 只读属性，定义文本的描边颜色。
   */
  readonly textStrokeColor: Vec3;
  /**
   * 定义文本描边的不透明度。
   */
  textStrokeOpacity: number;
  /**
   * 定义文本描边的厚度。
   */
  textStrokeThickness: number;
  /**
   * 定义文本使用的字体。
   */
  textFontFamily: UITextFontFamily;
  /**
   * 创建一个新的 Ui文本 实例。
   */
  static create(): UiText;
}
/**
 * UI输入框
 */
declare class UiInput extends UiText {
  /**
   * 事件管理器。
   */
  readonly events: EventEmitter<UiInputEvents>;
  /**
   * 输入框的未输入时文本提示内容。
   */
  placeholder: string;
  /**
   * 输入框显示的占位文本的颜色。
   */
  readonly placeholderColor: Vec3;
  /**
   * 输入框提示文本的不透明度。
   */
  readonly placeholderOpacity: number;
  /**
   * 输入框是否聚焦。
   */
  readonly isFocus: boolean;
  /**
   * 使输入框聚焦。
   */
  readonly focus: () => void;
  /**
   * 使输入框失去焦点。
   */
  readonly blur: () => string;
  /**
   * 创建一个新的 Ui输入框 实例。
   */
  static create(): UiInput;
}
/**
 * UI屏幕
 */
declare class UiScreen extends UiNode {
  /**
   * 屏幕是否可见。
   */
  visible: boolean;
  /**
   * 屏幕层级，层级越高的屏幕会显示在顶部，遮盖住层级较低的屏幕。
   */
  zIndex: number;
  /**
   * 创建一个新的 Ui屏幕 实例。
   */
  static create(): UiScreen;
  /**
   * 获取当前所有存在的屏幕实例。
   */
  static getAllScreen(): UiScreen[];
}

/**
 * UI图片事件
 */
declare type UiImageEvents = {
  /**
   * 图片加载完成事件。
   */
  load: UiEvent<UiImage>;
} & UiNodeEvents<UiImage>;

/**
 * UI图片
 */
declare class UiImage extends UiRenderable {
  /**
   * 图片元素是否加载完成。
   */
  readonly complete: boolean;
  /**
   * 图片元素的内容，应为图片的路径或者 URL。
   */
  image: (string & {}) | GamePictureAssets;
  /**
   * 图片元素的透明度。
   */
  imageOpacity: number;
  /**
   * 图片元素的图片资源展示方式
   * - 图片元素中的图片资源不属于其子元素，所以图片资源只受imageDisplayMode属性影响，不受其所在元素的裁剪、自适应作用。
   * - 缺省值：ImageDisplayMode.Fill
   */
  imageDisplayMode: ImageDisplayMode;
  /**
   * 事件管理器。
   */
  readonly events: EventEmitter<UiImageEvents>;
  /**
   * 创建一个新的 Ui图片 实例。
   */
  static create(): UiImage;
}
/**
 * UI组件
 */
declare class UiComponent {}
/**
 * UI缩放
 */
declare class UiScale extends UiComponent {
  /**
   * 缩放倍数，仅允许设置大于等于0的数字。当传入非法值时，不会生效并会在控制台打印一条警告。
   */
  scale: number;
  /**
   * 创建一个新的 Ui缩放 实例。
   */
  static create(): UiScale;
}

/**
 * 字体样式
 */
declare enum UITextFontFamily {
  /**
   *  默认字体
   */
  Default = 0,
  /**
   * 粗圆体
   */
  BoldRound = 1,
  /**
   *  Code New Roman Bold
   */
  CodeNewRomanBold = 2,
  /**
   *  EN-Serif
   */
  ENSerif = 3,
}

/**
 * 控制图像的显示方式
 */
declare enum ImageDisplayMode {
  /**
   * 铺满：（默认）适配元素外框长宽拉伸铺满展示，图片可能会变形
   */
  Fill = 0,
  /**
   * 等比铺满：等比缩放保证图片完整展示在外框内
   */
  Contain = 1,
  /**
   * 等比截取：等比缩放图片使图片填满外框，超出部分将被裁剪（隐藏显示）
   */
  Cover = 2,
  /**
   * 无：按图片正常尺寸与外框中心对齐展示，不对图片进行任何缩放调整，但是超出元素框部分会被裁剪（隐藏显示）
   */
  None = 3,
}

/**
 * 指针事件行为
 */
declare enum PointerEventBehavior {
  /**
   * 不响应，且不允许位于元素后方的其他元素响应。
   */
  DISABLE_AND_BLOCK_PASS_THROUGH = 0,
  /**
   * 不响应。
   */
  DISABLE = 1,
  /**
   * 不允许位于元素后方的其他元素响应。
   */
  BLOCK_PASS_THROUGH = 2,
  /**
   * 正常响应。
   */
  ENABLE = 3,
}

/**
 * 指针锁定状态变化事件。
 */
declare type PointerLockChangeEvent = {
  /**
   * 表示指针是否锁定。
   */
  isLocked: boolean;
};
/**
 * 玩家指针锁定状态变化或出错时产生的事件。
 */
declare type PointerLockEvents = {
  /**
   * 玩家指针锁定状态变化或出错时产生的事件。
   */
  pointerlockchange: PointerLockChangeEvent;
  /**
   * 玩家指针锁定状态变化或出错时产生的事件。
   */
  pointerlockerror: undefined;
};

/**
 * 全局监听玩家的输入。
 */
declare class InputSystem {
  /**
   * 全局监听玩家指针与UI元素交互时的产生的事件。
   */
  readonly uiEvents: EventEmitter<UiNodeEvents>;
  /**
   * 全局监听当玩家指针锁定状态变化或出错时产生的事件。
   */
  readonly pointerLockEvents: EventEmitter<PointerLockEvents>;
  /**
   * 全局监听当玩家按下鼠标时产生的事件。
   */
  onPointerDown: { sub: (handler: (e: { target: UiNode }) => void) => void };
  /**
   * 调用后解锁鼠标指针。
   */
  unlockPointer(): void;
  /**
   * 调用后锁定鼠标指针，由于浏览器限制，此操作可能会失败。
   * 有兴趣可以查看https://w3c.github.io/pointerlock/#dom-element-requestpointerlock。
   */
  lockPointer(): void;
}

/**
 * 代表客户端上的游戏世界。
 */
declare class ClientWorld {
  /**
   * 控制是否渲染3D场景。
   * - 当关闭(false)时，3D 场景的渲染将在客户端暂停，画面会停留在最后一次渲染的状态。
   * - 2D UI 不受此属性影响，除 3D 渲染外的客户端行为不受此属性影响。
   */
  rendering3d: boolean;
}

/**
 * 设备信息。
 */
declare interface DeviceInfo {
  /**
   * 设备类型。
   * - Desktop : 桌面设备
   * - Mobile : 手机设备
   */
  deviceType: "Desktop" | "Mobile";
  /**
   * 屏幕信息。
   */
  screen: {
    /**
     * 屏幕宽度。
     */
    width: number;
    /**
     * 屏幕高度。
     */
    height: number;
  };
}

/**
 * 导航器。
 */
declare class ClientNavigator {
  /**
   * 获取该客户端当前设备以及屏幕分辨率
   */
  getDeviceInfo(): DeviceInfo;
}

/**
 * 定义Audio事件的接口，包含事件的目标是Audio实例
 */
interface AudioEvent {
  target: Audio;
}

/**
 * 定义Audio事件映射类型，包括结束播放、数据加载和错误事件
 */
type AudioEventMap = {
  /**
   * 当音频播放结束时触发的事件
   */
  ended: AudioEvent;

  /**
   * 当音频数据加载完成时触发的事件
   */
  loadeddata: AudioEvent;

  /**
   * 当音频播放过程中发生错误时触发的事件
   */
  error: AudioEvent;
};

/**
 * 客户端音频，继承自EventEmitter
 */
declare class Audio extends EventEmitter<AudioEventMap> {
  /**
   * 创建一个新的Audio实例
   * @param url 设置音频的源路径
   */
  constructor(url: string);
  /*
   * 设置或获取音频的源路径
   */
  src: string;
  /**
   * 设置或获取音频的音量，取值范围为0到1
   */
  volume: number;
  /**
   *  获取音频播放过程中的错误信息，如果没有错误则为null
   */
  error: MediaError | null;
  /**
   * 加载音频文件
   */
  load(): void;
  /**
   * 播放音频
   * @returns Promise，表示音频播放完成
   */
  play(): Promise<void>;
  /**
   * 暂停音频播放
   */
  pause(): void;
}

/**
 * 表示媒体操作期间发生的错误。
 * 该类用于封装媒体错误的详细信息。
 */
declare class MediaError {
  /**
   * 创建 MediaError 的实例。
   * @param code 表示媒体错误类型的 MediaErrorCode 枚举值。
   * @param message 描述错误详细信息的字符串。
   */
  constructor(code: MediaErrorCode, message: string);

  /**
   * 错误代码，表示媒体错误的类型。
   */
  code: MediaErrorCode;

  /**
   * 错误消息，提供错误的详细描述。
   */
  message: string;
}

/**
 * 定义了一组媒体错误代码。
 * 这些错误代码用于标识不同类型的媒体错误。
 */
declare enum MediaErrorCode {
  /**
   * 媒体播放被中止。
   */
  MEDIA_ERR_ABORTED = 1,

  /**
   * 网络错误导致媒体播放失败。
   */
  MEDIA_ERR_NETWORK = 2,

  /**
   * 解码错误导致媒体播放失败。
   */
  MEDIA_ERR_DECODE = 3,

  /**
   * 媒体源不受支持。
   */
  MEDIA_ERR_SRC_NOT_SUPPORTED = 4,
}

/**
 * 客户端媒体控制类
 * 提供音频播放、停止播放、开始录音和停止录音等功能
 */
declare class ClientMedia {
  /**
   * 播放音频
   * @param spec 可选的音频配置参数，包含音频数据blob
   * @returns 返回一个Promise，表示音频播放完毕
   */
  playAudio(
    spec?: Partial<{
      /**
       * 音频Blob数据
       */
      blob: Blob;
      /**
       * 音频声音增益
       */
      gain: number;
    }>
  ): Promise<void>;

  /**
   * 停止播放音频
   */
  stopPlayAudio(): void;

  /**
   * 开始录音
   * @returns 返回一个Promise，表示成功开始录音，反之则抛出错误
   */
  startRecording(): Promise<void>;

  /**
   * 停止录音
   * @returns 返回一个Promise，解析为录音的Blob对象，格式为`wav`
   */
  stopRecording(): Promise<Blob>;
}

/**
 * Represents a blob object, which is an immutable, file-like object used for representing raw binary data.
 * Blobs are often used to handle binary data in web applications, such as images, videos, or other file types.
 */
declare class Blob {
  /**
   * Blob interface constructor function, used to create a new blob object.
   * @param blobParts An array of ArrayBufferView, ArrayBuffer, Blob, or string objects that make up the blob.
   * @param options Optional parameters for creating the blob, including type (MIME type) and endings (line ending handling).
   * @returns Returns a new blob object.
   */
  constructor(
    blobParts?: ArrayBufferView[] | ArrayBuffer[] | Blob[] | string[],
    options?: BlobPropertyBag
  ): Blob;

  // The size of the blob in bytes, used to get the length of the binary data.
  readonly size: number;

  // The MIME type of the blob, used to describe the type of binary data. It may be null if the type is unknown.
  readonly type: string | null;

  /**
   * Creates a new blob object that contains a subset of the original blob's data.
   * @param start The starting position of the subset. If not specified, it defaults to 0.
   * @param end The ending position of the subset. If not specified, it defaults to the size of the blob.
   * @param contentType The MIME type of the new blob. If not specified, it defaults to the type of the original blob.
   * @returns Returns a new blob object containing the specified subset of data.
   */
  slice(start?: number, end?: number, contentType?: string): Blob;

  /**
   * Returns an ArrayBuffer that contains the binary data of the blob.
   * @returns Returns a Promise that resolves with an ArrayBuffer representing the blob's data.
   */
  arrayBuffer(): Promise<ArrayBuffer>;

  /**
   * Returns a ReadableStream that can be used to read the blob's data as a stream of Uint8Array.
   * @returns Returns a ReadableStream that represents the blob's data.
   */
  stream(): ReadableStream<Uint8Array>;

  /**
   * Returns the text representation of the blob's data.
   * @returns Returns a Promise that resolves with a string representing the blob's data.
   */
  text(): Promise<string>;
}

/**
 * Optional parameters for creating a blob, including the MIME type and line ending handling.
 */
interface BlobPropertyBag {
  // The MIME type of the blob, used to describe the type of binary data. It may be undefined if no type is specified.
  type?: string;

  // Specifies how line endings are handled when creating a blob from text. It may be undefined if no special handling is required.
  endings?: string;
}

/**
 * 用于执行 HTTP 请求。
 */
declare class ClientHttp {
  /**
   * 使用给定的 URL 和选项来发起 HTTP 请求。
   *
   * @param url 请求的 URL 地址。
   * @param options 可选的请求配置项，包括请求方法、头部信息等。
   * @returns 返回一个 Promise，该 Promise 解析为服务器的响应。
   */
  fetch(url: string, options?: RequestInit): Promise<Response>;
}

/**
 * 游戏屏幕的宽度，取决于玩家进入游戏时的屏幕大小。
 */
declare const screenWidth: number;
/**
 * 游戏屏幕的高度，取决于玩家进入游戏时的屏幕大小。
 */
declare const screenHeight: number;
/**
 * 默认的屏幕下的UI根节点。
 * @deprecated 已不推荐使用该属性，请使用{@link UiScreen}获取屏幕对象。
 */
declare const ui: UiNode;
/**
 * 客户端与服务端通信的通道。
 */
declare const remoteChannel: ClientRemoteChannel;
/**
 * 获取客户端的浏览器信息。
 */
declare const navigator: ClientNavigator;
/**
 * 获取客户端的游戏世界。
 */
declare const world: ClientWorld;
/**
 * 全局监听玩家的输入。
 */
declare const input: InputSystem;
/**
 * 全局监听玩家的屏幕。
 */
declare const screen: ClientScreen;
/**
 * 获取客户端的录音管理器。
 */
declare const media: ClientMedia;
/**
 * 客户端请求外部数据
 */
declare const http: ClientHttp;

type AbortSignal = {
  readonly aborted: boolean;

  addEventListener: (
    type: "abort",
    listener: (this: AbortSignal) => void
  ) => void;
  removeEventListener: (
    type: "abort",
    listener: (this: AbortSignal) => void
  ) => void;
};

type HeadersInit =
  | Headers
  | Record<string, string>
  | Iterable<readonly [string, string]>
  | Iterable<Iterable<string>>;

{
  FormData, Blob, blobFrom, blobFromSync, File, fileFrom, fileFromSync;
}

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 * */
class Headers {
  constructor(init?: HeadersInit);

  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  has(name: string): boolean;
  set(name: string, value: string): void;
  forEach(
    callbackfn: (value: string, key: string, parent: Headers) => void,
    thisArg?: any
  ): void;

  [Symbol.iterator](): IterableIterator<[string, string]>;
  /**
   * Returns an iterator allowing to go through all key/value pairs contained in this object.
   */
  entries(): IterableIterator<[string, string]>;
  /**
   * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
   */
  keys(): IterableIterator<string>;
  /**
   * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
   */
  values(): IterableIterator<string>;

  /** Node-fetch extension */
  raw(): Record<string, string[]>;
}

interface RequestInit {
  /**
   * A BodyInit object or null to set request's body.
   */
  body?: BodyInit | null;
  /**
   * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
   */
  headers?: HeadersInit;
  /**
   * A string to set request's method.
   */
  method?: string;
  /**
   * A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
   */
  redirect?: RequestRedirect;
  /**
   * An AbortSignal to set request's signal.
   */
  signal?: AbortSignal | null;
  /**
   * A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.
   */
  referrer?: string;
  /**
   * A referrer policy to set request’s referrerPolicy.
   */
  referrerPolicy?: ReferrerPolicy;
}

interface ResponseInit {
  headers?: HeadersInit;
  status?: number;
  statusText?: string;
}

type BodyInit =
  | Blob
  | Buffer
  | URLSearchParams
  | FormData
  | NodeJS.ReadableStream
  | string;
declare class BodyMixin {
  constructor(body?: BodyInit, options?: { size?: number });

  readonly body: NodeJS.ReadableStream | null;
  readonly bodyUsed: boolean;
  readonly size: number;

  /** @deprecated Use `body.arrayBuffer()` instead. */
  buffer(): Promise<Buffer>;
  arrayBuffer(): Promise<ArrayBuffer>;
  formData(): Promise<FormData>;
  blob(): Promise<Blob>;
  json(): Promise<unknown>;
  text(): Promise<string>;
}

type RequestRedirect = "error" | "follow" | "manual";
type ReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "same-origin"
  | "origin"
  | "strict-origin"
  | "origin-when-cross-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";
type RequestInfo = string | Request;

type ResponseType =
  | "basic"
  | "cors"
  | "default"
  | "error"
  | "opaque"
  | "opaqueredirect";

class Response extends BodyMixin {
  constructor(body?: BodyInit | null, init?: ResponseInit);

  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;

  static error(): Response;
  static redirect(url: string, status?: number): Response;
  static json(data: any, init?: ResponseInit): Response;
}

class FetchError extends Error {
  constructor(
    message: string,
    type: string,
    systemError?: Record<string, unknown>
  );

  name: "FetchError";
  [Symbol.toStringTag]: "FetchError";
  type: string;
  code?: string;
  errno?: string;
}

class AbortError extends Error {
  type: string;
  name: "AbortError";
  [Symbol.toStringTag]: "AbortError";
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
