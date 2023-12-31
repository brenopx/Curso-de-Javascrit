export function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto = '';
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feria';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feria';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feria';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feria';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feria';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado-Feria';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}