interface AboutProps {
    content: any; // Replace `any` with the actual type for About data
}

function About({ content }: AboutProps) {
    return (
        <section>
            <h2>About</h2>
            <p>{content?.description || "No about content available."}</p>
        </section>
    );
}

export default About;