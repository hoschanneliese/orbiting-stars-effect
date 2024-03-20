# Orbiting Stars Effect

A lightweight JavaScript library for creating a mesmerizing orbiting stars effect using Three.js and GSAP. Perfect for adding a dynamic background or visual effects to your web projects.

## Features

- Easy to integrate with any web project.
- Customizable number of stars, orbit radius, and animation speed.
- Utilizes Three.js for 3D effects and GSAP for smooth animations.

## Installation

You can install `orbiting-stars-effect` via npm:

```bash
npm install orbiting-stars-effect
```

Or, if you prefer using yarn:

```bash
yarn add orbiting-stars-effect
```

## Usage

First, make sure you have a container in your HTML to host the orbiting stars effect:

```html
<div id="stars-container"></div>
```

Then, you can create an instance of `OrbitingStarsEffect` by passing the container ID and optional configuration options:

```javascript
import OrbitingStarsEffect from 'orbiting-stars-effect';

const options = {
starCount: 100, // Number of stars
orbitRadius: 200, // Orbit radius
animationDuration: 5 // Duration of one orbit cycle in seconds
};

new OrbitingStarsEffect('stars-container', options);
```

## API Reference

### `OrbitingStarsEffect(containerId, options)`

- **containerId**: `String` - The ID of the container element where the effect will be rendered.
- **options**: `Object` (optional) - Configuration options for the effect.
    - **starCount**: `Number` - The number of stars to generate (default: 100).
    - **orbitRadius**: `Number` - The radius of the orbit for the stars (default: 200).
    - **animationDuration**: `Number` - The duration of the animation cycle in seconds (default: 5).

## Contributing

We welcome contributions to the `orbiting-stars-effect` library. If you have suggestions or issues, please open an issue on [GitHub issues page](#). For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
