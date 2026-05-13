import { EmailTemplate } from "@/app/parts/estrutura/emailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { renderEmail } from "@/app/parts/utils/renderEmails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    const html = await renderEmail(<EmailTemplate body={body} />);

    try {
        const data = await resend.emails.send({
            from: "Persevere <noreply@persevere.com.br>",
            to: [
                "fabiofreitassilvacontato@gmail.com",
                "teste@persevere.com.br",
            ],
            subject: "Persevere - Contato Site",
            html,
        });

        return NextResponse.json(data);
    } catch (error: any) {
        console.error(error); // útil para ver no terminal
        return NextResponse.json(
            { error: error.message ?? "Erro desconhecido" },
            { status: 500 }
        );
    }
}
