export function excerpt(html: string, length = 300): string {
  const text = html.replace(/<[^>]*>/g, '')
  
  if (text.length <= length) {
    return text
  }
  
  return text.substring(0, length) + '...'
} 