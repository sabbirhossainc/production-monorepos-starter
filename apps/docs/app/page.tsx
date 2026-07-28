import { Button } from '@geniusgarage/ui/button'
import { Card } from '@geniusgarage/ui/card'
 
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p className="text-gray-600 mb-8">
        Component library documentation and examples
      </p>
 
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Button</h2>
          <p className="mb-4">Interactive button component with variants</p>
          <div className="space-y-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </Card>
 
        <Card>
          <h2 className="text-2xl font-bold mb-4">Card</h2>
          <p className="mb-4">Container component with shadow and padding</p>
          <p className="text-sm text-gray-600">You&apos;re looking at one!</p>
        </Card>
 
        <Card>
          <h2 className="text-2xl font-bold mb-4">CodeBlock</h2>
          <p className="mb-4">Syntax-highlighted code display</p>
          <p className="text-sm text-gray-600">
            Used in snippet manager app for displaying code
          </p>
        </Card>
      </div>
    </div>
  )
}