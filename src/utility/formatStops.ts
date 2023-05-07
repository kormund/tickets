export default function formatStops(stops: string[]): string {
  switch (stops.length) {
    case 0:
      return 'Без пересадок'
    case 1:
      return '1 пересадка'
    default:
      return `${stops.length} пересадки`
  }
}
