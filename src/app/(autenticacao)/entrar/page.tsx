import Link from "next/link";
import LoginScreen from "./components/cardlogin";

export default function Login(){

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
            <LoginScreen />
        </main>
    )
}