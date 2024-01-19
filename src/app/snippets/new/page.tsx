import { db } from "@/db";
import { redirect } from "next/navigation";


export default function SnippetCreatePage() {

    async function createSnippet( formData: FormData ) {
        // Make clear this is a servet action
        'use server';
        // User enter valid input

        const title = formData.get( 'title' ) as string;
        const code = formData.get( 'code' ) as string;

        // Take input a create a new record in the database.
        const snippet = await db.snippet.create( {
            data: {
                title,
                code
            }
        } );

        console.log( snippet );
        // Redirect user back to the root route
        redirect( '/' );

    }

    return (
        <>
            <form
                action={ createSnippet }
                className="flex flex-col gap-5">
                <h3 className="font-bold m-3">Create Snippet</h3>
                <div className="flex flex-col gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea
                        id="code"
                        name="code"
                        className="border rounded p-2 w-full"
                    />
                </div>

                <button type="submit" className="rounded p-2 bg-blue-200">Submit</button>
            </form>
        </>
    );
}