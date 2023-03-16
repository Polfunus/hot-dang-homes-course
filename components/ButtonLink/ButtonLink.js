import Link from 'next/link';

export const ButtonLink = ({ label, destination, className }) => {
    return (
        <Link href={destination} className="w-full h-full">
            <a className="btn">
                {label}
            </a>
        </Link>
    );
}