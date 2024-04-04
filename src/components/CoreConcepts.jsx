import { CORE } from '../data.js';
import Concept from './CoreConcept.jsx';

export default function CoreConcepts()
{
    return(
    <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE.map((conceptItem) => (
              <Concept {...conceptItem} />
            ))}
        </ul>
    </section>
    );
}