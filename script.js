// VARIABLES

const elementsInformation = [
    { numeroAtomico: 1, simbolo: "H", nombre: "Hidrógeno", estado: "Gas", serieQuimica: 'No metales', pesoAtomico: 1.008, electronegatividad: 2.20, puntoFusion: 14.01, puntoEbullicion: 20.28, densidad: 0.00008988, anoDescubrimiento: 1766 },
    { numeroAtomico: 2, simbolo: "He", nombre: "Helio", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 4.002602, electronegatividad: 'Null', puntoFusion: 0.95, puntoEbullicion: 4.22, densidad: 0.0001785, anoDescubrimiento: 1868 },
    { numeroAtomico: 3, simbolo: "Li", nombre: "Litio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 6.94, electronegatividad: 0.98, puntoFusion: 453.65, puntoEbullicion: 1560, densidad: 0.534, anoDescubrimiento: 1817 },
    { numeroAtomico: 4, simbolo: "Be", nombre: "Berilio", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 9.0122, electronegatividad: 1.57, puntoFusion: 1560, puntoEbullicion: 2742, densidad: 1.85, anoDescubrimiento: 1798 },
    { numeroAtomico: 5, simbolo: "B", nombre: "Boro", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 10.81, electronegatividad: 2.04, puntoFusion: 2349, puntoEbullicion: 4200, densidad: 2.34, anoDescubrimiento: 1808 },
    { numeroAtomico: 6, simbolo: "C", nombre: "Carbono", estado: "Sólido", serieQuimica: 'No metales', pesoAtomico: 12.011, electronegatividad: 2.55, puntoFusion: 3823, puntoEbullicion: 4098, densidad: 2.267, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 7, simbolo: "N", nombre: "Nitrógeno", estado: "Gas", serieQuimica: 'No metales', pesoAtomico: 14.007, electronegatividad: 3.04, puntoFusion: 63.15, puntoEbullicion: 77.36, densidad: 0.0012506, anoDescubrimiento: 1772 },
    { numeroAtomico: 8, simbolo: "O", nombre: "Oxígeno", estado: "Gas", serieQuimica: 'No metales', pesoAtomico: 15.999, electronegatividad: 3.44, puntoFusion: 54.36, puntoEbullicion: 90.20, densidad: 0.001429, anoDescubrimiento: 1774 },
    { numeroAtomico: 9, simbolo: "F", nombre: "Flúor", estado: "Gas", serieQuimica: 'No metales', pesoAtomico: 18.998, electronegatividad: 3.98, puntoFusion: 53.48, puntoEbullicion: 85.03, densidad: 0.001696, anoDescubrimiento: 1886 },
    { numeroAtomico: 10, simbolo: "Ne", nombre: "Neón", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 20.180, electronegatividad: 'Null', puntoFusion: 24.56, puntoEbullicion: 27.07, densidad: 0.0008999, anoDescubrimiento: 1898 },
    { numeroAtomico: 11, simbolo: "Na", nombre: "Sodio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 22.990, electronegatividad: 0.93, puntoFusion: 370.87, puntoEbullicion: 1156, densidad: 0.971, anoDescubrimiento: 1807 },
    { numeroAtomico: 12, simbolo: "Mg", nombre: "Magnesio", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 24.305, electronegatividad: 1.31, puntoFusion: 923, puntoEbullicion: 1363, densidad: 1.738, anoDescubrimiento: 1755 },
    { numeroAtomico: 13, simbolo: "Al", nombre: "Aluminio", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 26.982, electronegatividad: 1.61, puntoFusion: 933.47, puntoEbullicion: 2792, densidad: 2.698, anoDescubrimiento: 1825 },
    { numeroAtomico: 14, simbolo: "Si", nombre: "Silicio", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 28.085, electronegatividad: 1.90, puntoFusion: 1687, puntoEbullicion: 3538, densidad: 2.329, anoDescubrimiento: 1823 },
    { numeroAtomico: 15, simbolo: "P", nombre: "Fósforo", estado: "Sólido", serieQuimica: 'No metales', pesoAtomico: 30.974, electronegatividad: 2.19, puntoFusion: 317.30, puntoEbullicion: 553.65, densidad: 1.823, anoDescubrimiento: 1669 },
    { numeroAtomico: 16, simbolo: "S", nombre: "Azufre", estado: "Sólido", serieQuimica: 'No metales', pesoAtomico: 32.06, electronegatividad: 2.58, puntoFusion: 388.36, puntoEbullicion: 717.87, densidad: 2.067, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 17, simbolo: "Cl", nombre: "Cloro", estado: "Gas", serieQuimica: 'No metales', pesoAtomico: 35.45, electronegatividad: 3.16, puntoFusion: 171.6, puntoEbullicion: 239.11, densidad: 0.003214, anoDescubrimiento: 1774 },
    { numeroAtomico: 18, simbolo: "Ar", nombre: "Argón", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 39.948, electronegatividad: 'Null', puntoFusion: 83.80, puntoEbullicion: 87.30, densidad: 0.001784, anoDescubrimiento: 1894 },
    { numeroAtomico: 19, simbolo: "K", nombre: "Potasio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 39.098, electronegatividad: 0.82, puntoFusion: 336.53, puntoEbullicion: 1032, densidad: 0.862, anoDescubrimiento: 1807 },
    { numeroAtomico: 20, simbolo: "Ca", nombre: "Calcio", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 40.078, electronegatividad: 1.00, puntoFusion: 1115, puntoEbullicion: 1757, densidad: 1.54, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 21, simbolo: "Sc", nombre: "Escandio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 44.956, electronegatividad: 1.36, puntoFusion: 1814, puntoEbullicion: 3109, densidad: 2.989, anoDescubrimiento: 1879 },
    { numeroAtomico: 22, simbolo: "Ti", nombre: "Titanio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 47.867, electronegatividad: 1.54, puntoFusion: 1941, puntoEbullicion: 3560, densidad: 4.54, anoDescubrimiento: 1791 },
    { numeroAtomico: 23, simbolo: "V", nombre: "Vanadio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 50.942, electronegatividad: 1.63, puntoFusion: 2183, puntoEbullicion: 3680, densidad: 6.11, anoDescubrimiento: 1801 },
    { numeroAtomico: 24, simbolo: "Cr", nombre: "Cromo", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 51.996, electronegatividad: 1.66, puntoFusion: 2180, puntoEbullicion: 2944, densidad: 7.19, anoDescubrimiento: 1797 },
    { numeroAtomico: 25, simbolo: "Mn", nombre: "Manganeso", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 54.938, electronegatividad: 1.55, puntoFusion: 1519, puntoEbullicion: 2334, densidad: 7.21, anoDescubrimiento: 1774 },
    { numeroAtomico: 26, simbolo: "Fe", nombre: "Hierro", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 55.845, electronegatividad: 1.83, puntoFusion: 1811, puntoEbullicion: 3134, densidad: 7.874, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 27, simbolo: "Co", nombre: "Cobalto", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 58.933, electronegatividad: 1.88, puntoFusion: 1768, puntoEbullicion: 3200, densidad: 8.86, anoDescubrimiento: 1735 },
    { numeroAtomico: 28, simbolo: "Ni", nombre: "Níquel", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 58.693, electronegatividad: 1.91, puntoFusion: 1728, puntoEbullicion: 3186, densidad: 8.912, anoDescubrimiento: 1751 },
    { numeroAtomico: 29, simbolo: "Cu", nombre: "Cobre", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 63.546, electronegatividad: 1.90, puntoFusion: 1357.77, puntoEbullicion: 2835, densidad: 8.96, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 30, simbolo: "Zn", nombre: "Zinc", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 65.38, electronegatividad: 1.65, puntoFusion: 692.68, puntoEbullicion: 1180, densidad: 7.134, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 31, simbolo: "Ga", nombre: "Galio", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 69.723, electronegatividad: 1.81, puntoFusion: 302.91, puntoEbullicion: 2477, densidad: 5.91, anoDescubrimiento: 1875 },
    { numeroAtomico: 32, simbolo: "Ge", nombre: "Germanio", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 72.63, electronegatividad: 2.01, puntoFusion: 1211.40, puntoEbullicion: 3106, densidad: 5.323, anoDescubrimiento: 1886 },
    { numeroAtomico: 33, simbolo: "As", nombre: "Arsénico", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 74.922, electronegatividad: 2.18, puntoFusion: 1090, puntoEbullicion: 887, densidad: 5.776, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 34, simbolo: "Se", nombre: "Selenio", estado: "Sólido", serieQuimica: 'No metales', pesoAtomico: 78.96, electronegatividad: 2.55, puntoFusion: 494, puntoEbullicion: 958, densidad: 4.809, anoDescubrimiento: 1817 },
    { numeroAtomico: 35, simbolo: "Br", nombre: "Bromo", estado: "Líquido", serieQuimica: 'No metales', pesoAtomico: 79.904, electronegatividad: 2.96, puntoFusion: 265.8, puntoEbullicion: 332, densidad: 3.122, anoDescubrimiento: 1826 },
    { numeroAtomico: 36, simbolo: "Kr", nombre: "Kriptón", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 83.798, electronegatividad: 3.00, puntoFusion: 115.79, puntoEbullicion: 119.93, densidad: 0.003733, anoDescubrimiento: 1898 },
    { numeroAtomico: 37, simbolo: "Rb", nombre: "Rubidio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 85.468, electronegatividad: 0.82, puntoFusion: 312.46, puntoEbullicion: 961, densidad: 1.532, anoDescubrimiento: 1861 },
    { numeroAtomico: 38, simbolo: "Sr", nombre: "Estroncio", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 87.62, electronegatividad: 0.95, puntoFusion: 1050, puntoEbullicion: 1655, densidad: 2.64, anoDescubrimiento: 1790 },
    { numeroAtomico: 39, simbolo: "Y", nombre: "Itrio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 88.906, electronegatividad: 1.22, puntoFusion: 1799, puntoEbullicion: 3609, densidad: 4.469, anoDescubrimiento: 1794 },
    { numeroAtomico: 40, simbolo: "Zr", nombre: "Zirconio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 91.224, electronegatividad: 1.33, puntoFusion: 2128, puntoEbullicion: 4682, densidad: 6.506, anoDescubrimiento: 1789 },
    { numeroAtomico: 41, simbolo: "Nb", nombre: "Niobio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 92.906, electronegatividad: 1.6, puntoFusion: 2750, puntoEbullicion: 5017, densidad: 8.57, anoDescubrimiento: 1801 },
    { numeroAtomico: 42, simbolo: "Mo", nombre: "Molibdeno", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 95.95, electronegatividad: 2.16, puntoFusion: 2896, puntoEbullicion: 4912, densidad: 10.22, anoDescubrimiento: 1781 },
    { numeroAtomico: 43, simbolo: "Tc", nombre: "Tecnecio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 98, electronegatividad: 1.9, puntoFusion: 2430, puntoEbullicion: 4538, densidad: 11, anoDescubrimiento: 1937 },
    { numeroAtomico: 44, simbolo: "Ru", nombre: "Rutenio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 101.07, electronegatividad: 2.2, puntoFusion: 2607, puntoEbullicion: 4423, densidad: 12.37, anoDescubrimiento: 1844 },
    { numeroAtomico: 45, simbolo: "Rh", nombre: "Rodio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 102.91, electronegatividad: 2.28, puntoFusion: 2237, puntoEbullicion: 3968, densidad: 12.41, anoDescubrimiento: 1803 },
    { numeroAtomico: 46, simbolo: "Pd", nombre: "Paladio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 106.42, electronegatividad: 2.2, puntoFusion: 1828.05, puntoEbullicion: 3236, densidad: 12.02, anoDescubrimiento: 1803 },
    { numeroAtomico: 47, simbolo: "Ag", nombre: "Plata", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 107.87, electronegatividad: 1.93, puntoFusion: 1234.93, puntoEbullicion: 2435, densidad: 10.49, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 48, simbolo: "Cd", nombre: "Cadmio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 112.41, electronegatividad: 1.69, puntoFusion: 594.22, puntoEbullicion: 1040, densidad: 8.65, anoDescubrimiento: 1817 },
    { numeroAtomico: 49, simbolo: "In", nombre: "Indio", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 114.82, electronegatividad: 1.78, puntoFusion: 429.75, puntoEbullicion: 2345, densidad: 7.31, anoDescubrimiento: 1863 },
    { numeroAtomico: 50, simbolo: "Sn", nombre: "Estaño", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 118.71, electronegatividad: 1.96, puntoFusion: 505.08, puntoEbullicion: 2875, densidad: 7.287, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 51, simbolo: "Sb", nombre: "Antimonio", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 121.76, electronegatividad: 2.05, puntoFusion: 903.78, puntoEbullicion: 1860, densidad: 6.685, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 52, simbolo: "Te", nombre: "Telurio", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 127.6, electronegatividad: 2.1, puntoFusion: 722.66, puntoEbullicion: 1261, densidad: 6.232, anoDescubrimiento: 1782 },
    { numeroAtomico: 53, simbolo: "I", nombre: "Yodo", estado: "Sólido", serieQuimica: 'No metales', pesoAtomico: 126.9, electronegatividad: 2.66, puntoFusion: 386.85, puntoEbullicion: 457.4, densidad: 4.93, anoDescubrimiento: 1811 },
    { numeroAtomico: 54, simbolo: "Xe", nombre: "Xenón", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 131.29, electronegatividad: 2.6, puntoFusion: 161.4, puntoEbullicion: 165.03, densidad: 0.005887, anoDescubrimiento: 1898 },
    { numeroAtomico: 55, simbolo: "Cs", nombre: "Cesio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 132.91, electronegatividad: 0.79, puntoFusion: 301.59, puntoEbullicion: 944, densidad: 1.93, anoDescubrimiento: 1860 },
    { numeroAtomico: 56, simbolo: "Ba", nombre: "Bario", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 137.33, electronegatividad: 0.89, puntoFusion: 1000, puntoEbullicion: 2170, densidad: 3.62, anoDescubrimiento: 1808 },
    { numeroAtomico: 57, simbolo: "La", nombre: "Lantano", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 138.91, electronegatividad: 1.1, puntoFusion: 1193, puntoEbullicion: 3737, densidad: 6.145, anoDescubrimiento: 1839 },
    { numeroAtomico: 58, simbolo: "Ce", nombre: "Cerio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 140.12, electronegatividad: 1.12, puntoFusion: 1071, puntoEbullicion: 3716, densidad: 6.77, anoDescubrimiento: 1803 },
    { numeroAtomico: 59, simbolo: "Pr", nombre: "Praseodimio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 140.91, electronegatividad: 1.13, puntoFusion: 1204, puntoEbullicion: 3793, densidad: 6.77, anoDescubrimiento: 1885 },
    { numeroAtomico: 60, simbolo: "Nd", nombre: "Neodimio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 144.24, electronegatividad: 1.14, puntoFusion: 1294, puntoEbullicion: 3347, densidad: 7.01, anoDescubrimiento: 1885 },
    { numeroAtomico: 61, simbolo: "Pm", nombre: "Prometio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 145, electronegatividad: 1.13, puntoFusion: 1315, puntoEbullicion: 3273, densidad: 7.26, anoDescubrimiento: 1945 },
    { numeroAtomico: 62, simbolo: "Sm", nombre: "Samario", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 150.36, electronegatividad: 1.17, puntoFusion: 1345, puntoEbullicion: 2067, densidad: 7.52, anoDescubrimiento: 1879 },
    { numeroAtomico: 63, simbolo: "Eu", nombre: "Europio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 151.96, electronegatividad: 1.2, puntoFusion: 1099, puntoEbullicion: 1802, densidad: 5.24, anoDescubrimiento: 1901 },
    { numeroAtomico: 64, simbolo: "Gd", nombre: "Gadolinio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 157.25, electronegatividad: 1.2, puntoFusion: 1586, puntoEbullicion: 3546, densidad: 7.9, anoDescubrimiento: 1880 },
    { numeroAtomico: 65, simbolo: "Tb", nombre: "Terbio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 158.93, electronegatividad: 1.2, puntoFusion: 1629, puntoEbullicion: 3503, densidad: 8.23, anoDescubrimiento: 1843 },
    { numeroAtomico: 66, simbolo: "Dy", nombre: "Disprosio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 162.5, electronegatividad: 1.22, puntoFusion: 1680, puntoEbullicion: 2840, densidad: 8.55, anoDescubrimiento: 1886 },
    { numeroAtomico: 67, simbolo: "Ho", nombre: "Holmio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 164.93, electronegatividad: 1.23, puntoFusion: 1734, puntoEbullicion: 2993, densidad: 8.8, anoDescubrimiento: 1878 },
    { numeroAtomico: 68, simbolo: "Er", nombre: "Erbio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 167.26, electronegatividad: 1.24, puntoFusion: 1802, puntoEbullicion: 3141, densidad: 9.07, anoDescubrimiento: 1842 },
    { numeroAtomico: 69, simbolo: "Tm", nombre: "Tulio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 168.93, electronegatividad: 1.25, puntoFusion: 1818, puntoEbullicion: 2223, densidad: 9.32, anoDescubrimiento: 1879 },
    { numeroAtomico: 70, simbolo: "Yb", nombre: "Iterbio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 173.04, electronegatividad: 1.1, puntoFusion: 1097, puntoEbullicion: 1469, densidad: 6.9, anoDescubrimiento: 1878 },
    { numeroAtomico: 71, simbolo: "Lu", nombre: "Lutecio", estado: "Sólido", serieQuimica: 'Lantánidos', pesoAtomico: 174.97, electronegatividad: 1.27, puntoFusion: 1925, puntoEbullicion: 3675, densidad: 9.84, anoDescubrimiento: 1907 },
    { numeroAtomico: 72, simbolo: "Hf", nombre: "Hafnio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 178.49, electronegatividad: 1.3, puntoFusion: 2506, puntoEbullicion: 4876, densidad: 13.31, anoDescubrimiento: 1923 },
    { numeroAtomico: 73, simbolo: "Ta", nombre: "Tántalo", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 180.95, electronegatividad: 1.5, puntoFusion: 3290, puntoEbullicion: 5731, densidad: 16.69, anoDescubrimiento: 1802 },
    { numeroAtomico: 74, simbolo: "W", nombre: "Wolframio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 183.84, electronegatividad: 2.36, puntoFusion: 3695, puntoEbullicion: 5828, densidad: 19.25, anoDescubrimiento: 1783 },
    { numeroAtomico: 75, simbolo: "Re", nombre: "Renio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 186.21, electronegatividad: 1.9, puntoFusion: 3459, puntoEbullicion: 5869, densidad: 21.02, anoDescubrimiento: 1925 },
    { numeroAtomico: 76, simbolo: "Os", nombre: "Osmio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 190.23, electronegatividad: 2.2, puntoFusion: 3306, puntoEbullicion: 5285, densidad: 22.57, anoDescubrimiento: 1803 },
    { numeroAtomico: 77, simbolo: "Ir", nombre: "Iridio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 192.22, electronegatividad: 2.2, puntoFusion: 2719, puntoEbullicion: 4403, densidad: 22.56, anoDescubrimiento: 1803 },
    { numeroAtomico: 78, simbolo: "Pt", nombre: "Platino", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 195.08, electronegatividad: 2.28, puntoFusion: 2041.4, puntoEbullicion: 4098, densidad: 21.45, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 79, simbolo: "Au", nombre: "Oro", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 196.97, electronegatividad: 2.54, puntoFusion: 1337.33, puntoEbullicion: 3129, densidad: 19.32, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 80, simbolo: "Hg", nombre: "Mercurio", estado: "Líquido", serieQuimica: 'Metales de transición', pesoAtomico: 200.59, electronegatividad: 2.00, puntoFusion: 234.32, puntoEbullicion: 629.88, densidad: 13.53, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 81, simbolo: "Tl", nombre: "Talio", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 204.38, electronegatividad: 2.04, puntoFusion: 577, puntoEbullicion: 1746, densidad: 11.85, anoDescubrimiento: 1861 },
    { numeroAtomico: 82, simbolo: "Pb", nombre: "Plomo", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 207.2, electronegatividad: 2.33, puntoFusion: 600.61, puntoEbullicion: 2022, densidad: 11.34, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 83, simbolo: "Bi", nombre: "Bismuto", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 208.98, electronegatividad: 2.02, puntoFusion: 544.7, puntoEbullicion: 1837, densidad: 9.78, anoDescubrimiento: "Prehistórico" },
    { numeroAtomico: 84, simbolo: "Po", nombre: "Polonio", estado: "Sólido", serieQuimica: 'Metales', pesoAtomico: 209, electronegatividad: 2.0, puntoFusion: 527, puntoEbullicion: 1235, densidad: 9.32, anoDescubrimiento: 1898 },
    { numeroAtomico: 85, simbolo: "At", nombre: "Ástato", estado: "Sólido", serieQuimica: 'Semi-metales', pesoAtomico: 210, electronegatividad: 2.2, puntoFusion: 575, puntoEbullicion: 610, densidad: 7, anoDescubrimiento: 1940 },
    { numeroAtomico: 86, simbolo: "Rn", nombre: "Radón", estado: "Gas", serieQuimica: 'Gases nobles', pesoAtomico: 222, electronegatividad: 2.2, puntoFusion: 202, puntoEbullicion: 211.4, densidad: 0.00973, anoDescubrimiento: 1899 },
    { numeroAtomico: 87, simbolo: "Fr", nombre: "Francio", estado: "Sólido", serieQuimica: 'Metales alcalinos', pesoAtomico: 223, electronegatividad: 0.7, puntoFusion: 281, puntoEbullicion: 950, densidad: 1.87, anoDescubrimiento: 1939 },
    { numeroAtomico: 88, simbolo: "Ra", nombre: "Radio", estado: "Sólido", serieQuimica: 'Metales alcalinotérreos', pesoAtomico: 226, electronegatividad: 0.9, puntoFusion: 973, puntoEbullicion: 1413, densidad: 5.5, anoDescubrimiento: 1898 },
    { numeroAtomico: 89, simbolo: "Ac", nombre: "Actinio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 227, electronegatividad: 1.1, puntoFusion: 1324, puntoEbullicion: 3471, densidad: 10.07, anoDescubrimiento: 1899 },
    { numeroAtomico: 90, simbolo: "Th", nombre: "Torio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 232.04, electronegatividad: 1.3, puntoFusion: 2023, puntoEbullicion: 5061, densidad: 11.72, anoDescubrimiento: 1829 },
    { numeroAtomico: 91, simbolo: "Pa", nombre: "Protactinio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 231.04, electronegatividad: 1.5, puntoFusion: 1841, puntoEbullicion: 4300, densidad: 15.37, anoDescubrimiento: 1913 },
    { numeroAtomico: 92, simbolo: "U", nombre: "Uranio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 238.03, electronegatividad: 1.38, puntoFusion: 1405.3, puntoEbullicion: 4404, densidad: 18.95, anoDescubrimiento: 1789 },
    { numeroAtomico: 93, simbolo: "Np", nombre: "Neptunio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 237, electronegatividad: 1.36, puntoFusion: 917, puntoEbullicion: 4273, densidad: 20.45, anoDescubrimiento: 1940 },
    { numeroAtomico: 94, simbolo: "Pu", nombre: "Plutonio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 244, electronegatividad: 1.28, puntoFusion: 912.5, puntoEbullicion: 3505, densidad: 19.84, anoDescubrimiento: 1940 },
    { numeroAtomico: 95, simbolo: "Am", nombre: "Americio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 243, electronegatividad: 1.3, puntoFusion: 1449, puntoEbullicion: 2880, densidad: 12, anoDescubrimiento: 1944 },
    { numeroAtomico: 96, simbolo: "Cm", nombre: "Curio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 247, electronegatividad: 1.3, puntoFusion: 1613, puntoEbullicion: 3383, densidad: 13.51, anoDescubrimiento: 1944 },
    { numeroAtomico: 97, simbolo: "Bk", nombre: "Berkelio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 247, electronegatividad: 1.3, puntoFusion: 1259, puntoEbullicion: 2900, densidad: 14.79, anoDescubrimiento: 1949 },
    { numeroAtomico: 98, simbolo: "Cf", nombre: "Californio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 251, electronegatividad: 1.3, puntoFusion: 1173, puntoEbullicion: 1743, densidad: 15.1, anoDescubrimiento: 1950 },
    { numeroAtomico: 99, simbolo: "Es", nombre: "Einstenio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 252, electronegatividad: 1.3, puntoFusion: 1133, puntoEbullicion: 1269, densidad: 8.84, anoDescubrimiento: 1952 },
    { numeroAtomico: 100, simbolo: "Fm", nombre: "Fermio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 257, electronegatividad: 1.3, puntoFusion: 1800, puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1952 },
    { numeroAtomico: 101, simbolo: "Md", nombre: "Mendelevio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 258, electronegatividad: 1.3, puntoFusion: 827, puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1955 },
    { numeroAtomico: 102, simbolo: "No", nombre: "Nobelio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 259, electronegatividad: 1.3, puntoFusion: 827, puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1958 },
    { numeroAtomico: 103, simbolo: "Lr", nombre: "Lawrencio", estado: "Sólido", serieQuimica: 'Actínidos', pesoAtomico: 262, electronegatividad: 1.3, puntoFusion: 1627, puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1961 },
    { numeroAtomico: 104, simbolo: "Rf", nombre: "Rutherfordio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 267, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1969 },
    { numeroAtomico: 105, simbolo: "Db", nombre: "Dubnio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 270, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1967 },
    { numeroAtomico: 106, simbolo: "Sg", nombre: "Seaborgio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 271, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1974 },
    { numeroAtomico: 107, simbolo: "Bh", nombre: "Bohrio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 270, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1981 },
    { numeroAtomico: 108, simbolo: "Hs", nombre: "Hassio", estado: "Sólido", serieQuimica: 'Metales de transición', pesoAtomico: 277, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1984 },
    { numeroAtomico: 109, simbolo: "Mt", nombre: "Meitnerio", estado: "Desconocido", serieQuimica: 'Metales de transición', pesoAtomico: 276, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1982 },
    { numeroAtomico: 110, simbolo: "Ds", nombre: "Darmstadtio", estado: "Desconocido", serieQuimica: 'Metales de transición', pesoAtomico: 281, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1994 },
    { numeroAtomico: 111, simbolo: "Rg", nombre: "Roentgenio", estado: "Desconocido", serieQuimica: 'Metales de transición', pesoAtomico: 282, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1994 },
    { numeroAtomico: 112, simbolo: "Cn", nombre: "Copernicio", estado: "Desconocido", serieQuimica: 'Metales de transición', pesoAtomico: 285, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1996 },
    { numeroAtomico: 113, simbolo: "Nh", nombre: "Nihonio", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 286, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 2004 },
    { numeroAtomico: 114, simbolo: "Fl", nombre: "Flerovio", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 289, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 1999 },
    { numeroAtomico: 115, simbolo: "Mc", nombre: "Moscovio", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 290, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 2003 },
    { numeroAtomico: 116, simbolo: "Lv", nombre: "Livermorio", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 293, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 2000 },
    { numeroAtomico: 117, simbolo: "Ts", nombre: "Tenesino", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 294, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 2010 },
    { numeroAtomico: 118, simbolo: "Og", nombre: "Oganesón", estado: "Desconocido", serieQuimica: 'NaN', pesoAtomico: 294, electronegatividad: 'Null', puntoFusion: 'Null', puntoEbullicion: 'Null', densidad: 'Null', anoDescubrimiento: 2002 }
];

const quimicSeries = [
    {serieQuimica: 'Metales alcalinos', htmlClass: 'alcaline-metals'},
    {serieQuimica: 'Metales alcalinotérreos', htmlClass: 'alcaline-terrains'},
    {serieQuimica: 'Lantánidos', htmlClass: 'lantinides'},
    {serieQuimica: 'Actínidos', htmlClass: 'actinides'},
    {serieQuimica: 'Metales de transición', htmlClass: 'transition-metals'},
    {serieQuimica: 'Metales', htmlClass: 'metals'},
    {serieQuimica: 'Semi-metales', htmlClass: 'semi-metals'},
    {serieQuimica: 'No metales', htmlClass: 'non-metals'},
    {serieQuimica: 'Gases nobles', htmlClass: 'noble-gases'},
    {serieQuimica: 'NaN', htmlClass: 'other-elements'},
];

const stateElements = [
    {state: 'Sólido', htmlClass: 'state-Solid'},
    {state: 'Líquido', htmlClass: 'state-Liquid'},
    {state: 'Gas', htmlClass: 'state-Gas'},
    {state: 'Desconocido', htmlClass: 'state-Unknown'},
];

const elementViewSections = [
    {name: 'quimic-serie', class: 'serieQuimica'},
    {name: 'state', class: 'estado'},
    {name: 'atomic-weight', class: 'pesoAtomico'},
    {name: 'electronegativity', class: 'electronegatividad'},
    {name: 'fusion-point', class: 'puntoFusion'},
    {name: 'ebullicion-point', class: 'puntoEbullicion'},
    {name: 'density', class: 'densidad'},
    {name: 'annio-discovery', class: 'anoDescubrimiento'},
];

const periodicTable = document.getElementById("periodic-table");
const lactinidesElements = document.getElementById("lantinides-elements");
const actinidesElements = document.getElementById("actinides-elements");
const elementView = document.getElementById("element-view");


// PERIODIC TABLE - ELEMENTS

function setElement() {
    elementsInformation.forEach((elemento) => {
        const element = document.createElement("article");
        element.classList.add("periodic-table_element");
        element.classList.add(`transition-bg`);
        element.setAttribute("id", `element-${elemento.numeroAtomico}`);
        element.innerHTML = `
            <p>${elemento.numeroAtomico}</p>
            <p>${elemento.simbolo}</p>
            <p>${elemento.nombre}</p>
            <p id="periodic-table_element--info-${elemento.numeroAtomico}">${elemento.pesoAtomico}</p>
        `;

        if (elemento.numeroAtomico >= 57 && elemento.numeroAtomico <= 71) {
            lactinidesElements.appendChild(element);
            return;
        } else if (elemento.numeroAtomico >= 89 && elemento.numeroAtomico <= 103) {
            actinidesElements.appendChild(element);
            return;
        }

        periodicTable.appendChild(element);

    });
};

setElement();

function setColors() {
    for (let i = 0; i < elementsInformation.length; i++) {
        for (let j = 0; j < quimicSeries.length; j++) {
            if (elementsInformation[i].serieQuimica === quimicSeries[j].serieQuimica) {
                elementsInformation[i].color = quimicSeries[j].htmlClass;
                document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[j].htmlClass);
            };
        };
    };

};

setColors();


// STATE ELEMENTS

function setStates() {
    for (let i = 0; i < stateElements.length; i++) {
        const state = document.getElementById(`state-${stateElements[i].state}`);
        state.classList.add('transition-bg');

        state.addEventListener("mouseover", () => stateOnMouseOver(i));
        state.addEventListener("mouseout", () => stateOnMouseOut(i));
    };
};

setStates();

function stateOnMouseOver(position) {
    for (let i = 0; i < stateElements.length; i++) {
        if (stateElements[position].state === stateElements[i].state) {
            document.getElementById(`state-${stateElements[i].state}`).classList.remove('blank-color');
            document.getElementById(`state-${stateElements[i].state}`).classList.add(stateElements[position].htmlClass);
        };
    };

    for (let i = 0; i < elementsInformation.length; i++) {
        if (stateElements[position].state === elementsInformation[i].estado) {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(stateElements[position].htmlClass);
        } else {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add('blank-color');
        };
    };
};

function stateOnMouseOut(position) {
    for (let i = 0; i < stateElements.length; i++) {
        if (stateElements[position].state === stateElements[i].state) {
            document.getElementById(`state-${stateElements[i].state}`).classList.remove(stateElements[position].htmlClass);
            document.getElementById(`state-${stateElements[i].state}`).classList.add('blank-color');
        }
    }


    for (let i = 0; i < elementsInformation.length; i++) {
        if (stateElements[position].state === elementsInformation[i].estado) {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(stateElements[position].htmlClass);
        } else {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove('blank-color');
        }
    }
};


// QUIMIC SERIES PANEL

function setQuimicSeriesEvents() {
    for (let i = 0; i < quimicSeries.length; i++) {
        if (i < 9) {
            const element = document.getElementById(`quimic-series-panel__${quimicSeries[i].htmlClass}`);
            element.classList.add('transition-bg');
            element.addEventListener("mouseover", () => qSeriesMouseOver(i));
            element.addEventListener("mouseout", () => qSeriesMouseOut(i));
        }
    };
};

setQuimicSeriesEvents();

const qSeriesMetalSection = document.getElementById("quimic-series-panel__metal-section");
const qSeriesNonMetalSection = document.getElementById("quimic-series-panel__non-metal-section");

qSeriesMetalSection.addEventListener("mouseover", () => qSeriesSectionsMouseOver(0));
qSeriesMetalSection.addEventListener("mouseout", () => qSeriesSectionsMouseOut(0));
qSeriesNonMetalSection.addEventListener("mouseover", () => qSeriesSectionsMouseOver(1));
qSeriesNonMetalSection.addEventListener("mouseout", () => qSeriesSectionsMouseOut(1));

function qSeriesMouseOver(position) {
    for (let i = 0; i < elementsInformation.length; i++) {
        if (elementsInformation[i].serieQuimica !== quimicSeries[position].serieQuimica) {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);
        };
    };

    for (let i = 0; i < quimicSeries.length; i++) {
        if (quimicSeries[i].serieQuimica !== quimicSeries[position].serieQuimica) {
            document.getElementById(`quimic-series-panel__${quimicSeries[i].htmlClass}`).classList.add(`blank-color`);
        };
    };

};

function qSeriesMouseOut(position) {
    for (let i = 0; i < elementsInformation.length; i++) {
        if (elementsInformation[i].serieQuimica !== quimicSeries[position].serieQuimica) {
            document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
        };
    };

    for (let i = 0; i < quimicSeries.length; i++) {
        if (quimicSeries[i].serieQuimica !== quimicSeries[position].serieQuimica) {
            document.getElementById(`quimic-series-panel__${quimicSeries[i].htmlClass}`).classList.remove(`blank-color`);
        };
    };
};


function qSeriesSectionsMouseOver(index) {
    if (index === 0) {
        qSeriesMetalSection.style.backgroundColor = '#DDD';

        for (let i = 0; i < elementsInformation.length; i++) {
            switch (elementsInformation[i].serieQuimica) {
                case quimicSeries[6].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[6].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.remove(quimicSeries[6].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[7].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[7].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[7].htmlClass}`).classList.remove(quimicSeries[7].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[7].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[8].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[8].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[8].htmlClass}`).classList.remove(quimicSeries[8].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[8].htmlClass}`).classList.add(`blank-color`);
                    break;

                default:
                    break;
            };
        };
    };

    if (index === 1) {
        qSeriesNonMetalSection.style.backgroundColor = '#DDD';

        for (let i = 0; i < elementsInformation.length; i++) {
            switch (elementsInformation[i].serieQuimica) {
                case quimicSeries[0].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[0].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[0].htmlClass}`).classList.remove(quimicSeries[0].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[0].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[1].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[1].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[1].htmlClass}`).classList.remove(quimicSeries[1].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[1].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[2].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[2].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[2].htmlClass}`).classList.remove(quimicSeries[2].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[2].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[3].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[3].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[3].htmlClass}`).classList.remove(quimicSeries[3].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[3].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[4].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[4].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[4].htmlClass}`).classList.remove(quimicSeries[4].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[4].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[5].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[5].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[5].htmlClass}`).classList.remove(quimicSeries[5].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[5].htmlClass}`).classList.add(`blank-color`);
                    break;

                case quimicSeries[6].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(quimicSeries[6].htmlClass);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(`blank-color`);

                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.remove(quimicSeries[6].htmlClass);
                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.add(`blank-color`);
                    break;

                default:
                    break;
            };
        };
    };
};

function qSeriesSectionsMouseOut(index) {
    if (index === 0) {
        qSeriesMetalSection.style.backgroundColor = '#FFF';

        for (let i = 0; i < elementsInformation.length; i++) {
            switch (elementsInformation[i].serieQuimica) {
                case quimicSeries[6].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[6].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.add(quimicSeries[6].htmlClass);
                    break;

                case quimicSeries[7].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[7].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[7].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[7].htmlClass}`).classList.add(quimicSeries[7].htmlClass);
                    break;

                case quimicSeries[8].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[8].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[8].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[8].htmlClass}`).classList.add(quimicSeries[8].htmlClass);
                    break;

                default:
                    break;
            };
        };
    };

    if (index === 1) {
        qSeriesNonMetalSection.style.backgroundColor = '#FFF';

        for (let i = 0; i < elementsInformation.length; i++) {
            switch (elementsInformation[i].serieQuimica) {
                case quimicSeries[0].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[0].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[0].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[0].htmlClass}`).classList.add(quimicSeries[0].htmlClass);
                    break;

                case quimicSeries[1].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[1].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[1].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[1].htmlClass}`).classList.add(quimicSeries[1].htmlClass);
                    break;

                case quimicSeries[2].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[2].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[2].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[2].htmlClass}`).classList.add(quimicSeries[2].htmlClass);
                    break;

                case quimicSeries[3].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[3].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[3].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[3].htmlClass}`).classList.add(quimicSeries[3].htmlClass);
                    break;

                case quimicSeries[4].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[4].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[4].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[4].htmlClass}`).classList.add(quimicSeries[4].htmlClass);
                    break;

                case quimicSeries[5].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[5].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[5].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[5].htmlClass}`).classList.add(quimicSeries[5].htmlClass);
                    break;

                case quimicSeries[6].serieQuimica:
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.remove(`blank-color`);
                    document.getElementById(`element-${elementsInformation[i].numeroAtomico}`).classList.add(quimicSeries[6].htmlClass);

                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.remove(`blank-color`);
                    document.getElementById(`quimic-series-panel__${quimicSeries[6].htmlClass}`).classList.add(quimicSeries[6].htmlClass);
                    break;

                default:
                    break;
            };
        };
    };
};


// ELEMENT VIEW

function setElementViewInfo(elemento) {

    document.getElementById(`element-view__atomic-Number`).innerText = elemento.numeroAtomico;
    document.getElementById(`element-view__symbol`).innerText = elemento.simbolo;
    document.getElementById(`element-view__name`).innerText = elemento.nombre;
    document.getElementById(`element-view__atomic-weight`).innerText = elemento.pesoAtomico;

    for (let i = 0; i < elementViewSections.length; i++) {

        document.getElementById(`elements-data__${elementViewSections[i].name}`).innerText = elemento[elementViewSections[i].class];
    };

    function setElementViewColor (index) {
        quimicSeries.forEach((element) => {
            if (element !== quimicSeries[index]) {
                elementView.classList.remove(element.htmlClass);
            };

            elementView.classList.add(quimicSeries[index].htmlClass);
        });
    };

    switch (elemento.serieQuimica) {
        case quimicSeries[0].serieQuimica:
            setElementViewColor(0);
            break;

        case quimicSeries[1].serieQuimica:
            setElementViewColor(1);
            break;

        case quimicSeries[2].serieQuimica:
            setElementViewColor(2);
            break;

        case quimicSeries[3].serieQuimica:
            setElementViewColor(3);
            break;

        case quimicSeries[4].serieQuimica:
            setElementViewColor(4);
            break;

        case quimicSeries[5].serieQuimica:
            setElementViewColor(5);
            break;

        case quimicSeries[6].serieQuimica:
            setElementViewColor(6);
            break;

        case quimicSeries[7].serieQuimica:
            setElementViewColor(7);
            break;

        case quimicSeries[8].serieQuimica:
            setElementViewColor(8);
            break;

        case quimicSeries[9].serieQuimica:
            setElementViewColor(9);
            break;

        default:
            break;
    };
};

function setElementViewPanel () {
    for (let i = 0; i < elementsInformation.length; i++) {
        const element = document.getElementById(`element-${elementsInformation[i].numeroAtomico}`);

        element.addEventListener("mouseover", () => setElementViewInfo(elementsInformation[i]));
    };
};

setElementViewPanel();

function elementPanelSectionsClick(index) {
    for (let i = 0; i < elementsInformation.length; i++) {
        switch (index) {
            case 0:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].serieQuimica;
                break;

            case 1:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].estado;
                break;

            case 2:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].pesoAtomico;
                break;

            case 3:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].electronegatividad;
                break;

            case 4:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].puntoFusion;
                break;

            case 5:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].puntoEbullicion;
                break;

            case 6:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].densidad;
                break;

            case 7:
                document.getElementById(`periodic-table_element--info-${elementsInformation[i].numeroAtomico}`).innerText = elementsInformation[i].anoDescubrimiento;
                break;

            default:
                break;
        };
    };
};

for (let i = 0; i < elementViewSections.length; i++) {
    document.getElementById(`eSection-${elementViewSections[i].name}`).addEventListener("click", () => elementPanelSectionsClick(i));
};
