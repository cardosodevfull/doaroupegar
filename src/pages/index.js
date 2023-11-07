import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="wrapper">
            <div><h3>Olá tudo bem!</h3> <br />
                Você quer doar? produtos para cuidados com pessoas de Acidente vascular cerebral (AVC).<br />
                Ou está precisando destes produtos?</div>
            <div className="flex">
                <Link href="/signin">
                    <button className="btn btn-success">Doar</button>
                </Link>
                <Link href="/signin">
                    <button className="btn btn-warning">Receber</button>
                </Link>
            </div>
        </div>

    )
}