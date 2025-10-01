import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Constants
G = 6.67430e-11  # Gravitational constant
c = 299792458  # Speed of light
M = 1.989e30  # Mass of the sun (for a solar mass black hole)

# Schwarzschild radius
Rs = 2 * G * M / c**2

# Photon sphere
R_photon = 3 * Rs / 2

# Simulation parameters
num_photons = 50
max_distance = 10 * Rs
num_steps = 1000

# Initial conditions for photons
angles = np.linspace(0, 2*np.pi, num_photons, endpoint=False)
initial_r = np.full(num_photons, max_distance)
initial_phi = angles
initial_dr = np.zeros(num_photons)
initial_dphi = np.full(num_photons, 0.01)  # Small angular velocity

# Function to compute gravitational potential
def potential(r):
    return -G * M / r

# Function to compute effective potential for photons
def effective_potential(r, L):
    return (L**2) / (2 * r**2) - G * M / r

# RK4 integration for geodesic equation
def rk4_step(r, phi, dr, dphi, dt):
    # For simplicity, we'll use a basic integration
    # In reality, this would require solving the geodesic equations
    ddr = -G * M / r**2 + (dphi**2) * r
    ddphi = -2 * dr * dphi / r

    r_new = r + dr * dt
    phi_new = phi + dphi * dt
    dr_new = dr + ddr * dt
    dphi_new = dphi + ddphi * dt

    return r_new, phi_new, dr_new, dphi_new

# Simulation
fig, ax = plt.subplots(figsize=(10, 10))
ax.set_xlim(-max_distance, max_distance)
ax.set_ylim(-max_distance, max_distance)
ax.set_aspect('equal')

# Plot black hole
black_hole = plt.Circle((0, 0), Rs, color='black', fill=True)
ax.add_patch(black_hole)

# Plot photon sphere
photon_sphere = plt.Circle((0, 0), R_photon, color='red', fill=False, linestyle='--')
ax.add_patch(photon_sphere)

# Initialize photon positions
photons_x = initial_r * np.cos(initial_phi)
photons_y = initial_r * np.sin(initial_phi)
photons, = ax.plot(photons_x, photons_y, 'o', markersize=2, color='yellow')

def animate(frame):
    global initial_r, initial_phi, initial_dr, initial_dphi

    dt = 0.01

    for i in range(num_photons):
        r, phi, dr, dphi = rk4_step(initial_r[i], initial_phi[i], initial_dr[i], initial_dphi[i], dt)

        # Check if photon falls into black hole
        if r <= Rs:
            r = max_distance
            phi = np.random.uniform(0, 2*np.pi)
            dr = 0
            dphi = 0.01

        initial_r[i] = r
        initial_phi[i] = phi
        initial_dr[i] = dr
        initial_dphi[i] = dphi

    photons_x = initial_r * np.cos(initial_phi)
    photons_y = initial_r * np.sin(initial_phi)
    photons.set_data(photons_x, photons_y)

    return photons,

anim = FuncAnimation(fig, animate, frames=num_steps, interval=50, blit=True)

plt.title('Black Hole Photon Simulation')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True, alpha=0.3)
plt.show()
