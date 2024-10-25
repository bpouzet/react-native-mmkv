
/**
 * Configures the mode of the MMKV instance.
 */
export enum Mode {
  /**
   * The MMKV instance is only used from a single process (this app).
   */
  SINGLE_PROCESS,
  /**
   * The MMKV instance may be used from multiple processes, such as app clips, share extensions or background services.
   */
  MULTI_PROCESS,
}

/**
 * Used for configuration of a single MMKV instance.
 */
export interface Configuration {
  /**
   * The MMKV instance's ID. If you want to use multiple instances, make sure to use different IDs!
   *
   * @example
   * ```ts
   * const userStorage = new MMKV({ id: `user-${userId}-storage` })
   * const globalStorage = new MMKV({ id: 'global-app-storage' })
   * ```
   *
   * @default 'mmkv.default'
   */
  id: string;
  /**
   * The MMKV instance's root path. By default, MMKV stores file inside `$(Documents)/mmkv/`. You can customize MMKV's root directory on MMKV initialization:

   * @example
   * ```ts
   * const temporaryStorage = new MMKV({ path: '/tmp/' })
   * ```
   *
   * @note On iOS, if an `AppGroup` is set in `Info.plist` and `path` is `undefined`, MMKV will use the `AppGroup` directory.
   * App Groups allow you to share MMKV storage between apps, widgets and extensions within the same AppGroup bundle.
   * For more information, see [the `Configuration` section](https://github.com/Tencent/MMKV/wiki/iOS_tutorial#configuration).
   *
   * @default undefined
   */
  path?: string;
  /**
   * The MMKV instance's encryption/decryption key. By default, MMKV stores all key-values in plain text on file, relying on iOS's sandbox to make sure the file is encrypted. Should you worry about information leaking, you can choose to encrypt MMKV.
   *
   * Encryption keys can have a maximum length of 16 bytes.
   *
   * @example
   * ```ts
   * const secureStorage = new MMKV({ encryptionKey: 'my-encryption-key!' })
   * ```
   *
   * @default undefined
   */
  encryptionKey?: string;
  /**
   * Configure the processing mode for MMKV.
   * - `SINGLE_PROCESS`: The MMKV instance is only used from a single process (this app).
   * - `MULTI_PROCESS`: The MMKV instance may be used from multiple processes, such as app clips, share extensions or background services.
   *
   * @default SINGLE_PROCESS
   */
  mode?: Mode;
  /**
   * If `true`, the MMKV instance can only read from the storage, but not write to it.
   */
  readOnly?: boolean;
}

export function getMMKVTurboModule() {
  return null;
}
