export const relativeToAbsoluteUrls = (htmlString = "") => {
    return (
        htmlString.split(process.env.NEXT_PUBLIC_WORDPRESS_URL).join("") // remove the wordpress url from the string

    )
};