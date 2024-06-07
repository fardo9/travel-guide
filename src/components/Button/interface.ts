export interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    title: string;
    icon?: string;
    variant: 'btn_dark_green_outline' | 'btn_white' | 'btn_white_text' | 'btn_green' | 'btn_dark_green' | 'btn_light' | 'btn_primary' | 'btn_secondary';
    full?: boolean;
}