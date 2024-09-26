declare module 'aos' {
    interface AOSOptions {
        offset?: number; 
        delay?: number; 
        duration?: number; 
        easing?: string;
        once?: boolean; 
        mirror?: boolean; 
        anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top' | 'center-bottom' | 'center-center' | 'center-top'; // default: 'top-bottom'
    }

    interface AOS {
        init(options?: AOSOptions): void;
        refresh(): void;
        refreshHard(): void;
        remove(): void;
    }

    const AOS: AOS;
    export default AOS;
}
