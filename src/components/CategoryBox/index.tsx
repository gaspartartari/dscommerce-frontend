import './styles.css';


type Props = {
    name: string;
}

export default function CategoryBox({ name }: Props) {

    return (
        <div className="dsc-category">
            {name}
        </div>
    );
}