// utils/renderEmail.ts
import { render } from "@react-email/render";
import juice from "juice";

export function renderEmail(component: React.ReactElement) {
    // Render JSX para HTML
    const html = render(component);

    // Converte CSS em inline styles
    const inlined = juice(html);

    return inlined;
}
