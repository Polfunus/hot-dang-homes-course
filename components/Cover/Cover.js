import Image from "next/image";

export const Cover = ({ children, background }) => {
    return (
        <div style={{ height: "100vh", minHeight: "600px", display: "grid", placeContent: "center", position: 'relative', color: 'white' }}>
            <Image
                src={background}
                alt="Cover"
                fill
                className="mix-blend-soft-light object-cover"
            />
            <div className="relative">{children}</div>
        </div>
    );
}