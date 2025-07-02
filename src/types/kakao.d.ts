declare global {
    interface Window {
        Kakao: {
            init: (key: string) => void;
            isInitialized: () => boolean;
            Auth: {
                login: (options: {
                    success: (authObj: any) => void;
                    fail: (err: any) => void;
                }) => void;
                logout: (callback?: () => void) => void;
                authorize: (options: {
                    redirectUri: string;
                    state?: string;
                    scope?: string;
                    throughTalk?: boolean;
                }) => void;
            };
            API: {
                request: (options: {
                    url: string;
                    success: (data: any) => void;
                    fail?: (err: any) => void;
                }) => void;
            };
        };
    }
}

export {};
