type ServiceCardProps = {
    title: string;
    description: string;
    image: string;
    objectPosition: string;
};

export default function ServiceCard({ title, description, image, objectPosition }: ServiceCardProps) {
    return (
        <li className="group card-surface flex flex-col rounded-[1.8rem] p-6 transition-[transform,box-shadow] hover:-translate-y-1.5 hover:shadow-2xl md:p-8">
            <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={`Representation of ${title}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition }}
                />
            </div>
            <h3 className="mb-4 text-[1.5rem] leading-tight text-[hsl(var(--dark-accent-hsl))]">
                {title}
            </h3>
            <p className="text-[0.98rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                {description}
            </p>
        </li>
    );
}
