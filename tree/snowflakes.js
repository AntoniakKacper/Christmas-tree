import { BufferGeometry, TextureLoader, Float32BufferAttribute, PointsMaterial, AdditiveBlending, Points } from 'three';

let positions = [], velocities = [];

const numberOfSnowflakes = 3000;

const maxRange = 500, minRange = maxRange/2;
const minHeight = 0;

const geometry = new BufferGeometry();
const textureLoader = new TextureLoader();

export const addSnowflakes = () => {
    for(let i = 0; i < numberOfSnowflakes; i++){
        positions.push(
            Math.floor(Math.random() * maxRange - minRange),
            Math.floor(Math.random() * minRange + minHeight),
            Math.floor(Math.random() * maxRange - minRange)
        )

        velocities.push(
            Math.floor(Math.random() * 3) * 0.05,
            Math.floor(Math.random() * 5 + 0.12) * 0.04,
            Math.floor(Math.random() * 3) * 0.05
        )
    }
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
    geometry.setAttribute('velocities', new Float32BufferAttribute(velocities, 3))
    const flakeMaterial = new PointsMaterial({
        size: 3,
        map: textureLoader.load('/images/snowflake.png'),
        blending: AdditiveBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.7
    })

    return new Points(geometry, flakeMaterial);
    
}

export const updateParticles = (particles) => {
    for(let i = 0; i < numberOfSnowflakes * 3; i += 3){
        const particlePosition = particles.geometry.attributes.position.array;
        const particleVelocity = particles.geometry.attributes.velocities.array;
        particlePosition[i] -= particleVelocity[i];
        particlePosition[i + 1] -= particleVelocity[i + 1];
        particlePosition[i + 2] -= particleVelocity[i + 2];

        if(particlePosition[i + 1] < 0){
            particlePosition[i] = Math.floor(Math.random()*maxRange - minRange);
            particlePosition[i + 1] = Math.floor(Math.random()*minRange + minHeight);
            particlePosition[i + 2] = Math.floor(Math.random()*maxRange - minRange);
        }
    }
    particles.geometry.attributes.position.needsUpdate = true;
}