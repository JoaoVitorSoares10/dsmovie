import FormCard from '../../components/formCard';
import { useParams } from 'react-router-dom';

export default function Form() {
    const params = useParams()

    return (
        <FormCard movieId={`${params.movieId}`}/>
    )
}