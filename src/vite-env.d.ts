
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_HOST: string;
    readonly VITE_PORT: number;
    readonly VITE_APP_API_BASE_URL: string;
    readonly VITE_BUILD_SOURCEMAP: string;
    readonly VITE_BUILD_DROP_CONSOLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}