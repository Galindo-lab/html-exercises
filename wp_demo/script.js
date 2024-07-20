function transitionTo(targetUrl) {
    if (!document.startViewTransition) {
        // Fallback si la API de View Transitions no está disponible
        window.location.href = targetUrl;
        return;
    }
    
    document.startViewTransition(() => {
        window.location.href = targetUrl;
    });
}