export interface User {
    id?: string; // Agrega ? para hacerlo opcional si no siempre tendrás un ID
    email: string;
    password: string;
    displayName?: string; }