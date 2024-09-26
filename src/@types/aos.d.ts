declare module 'aos' {
    interface AOS {
        init(options?: any): void;
        refresh(): void;
        refreshHard(): void;
        remove(): void;
    }

    const AOS: AOS;
    export default AOS;
}
