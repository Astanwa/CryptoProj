import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onNavigate: (page: 'funds') => void;
}

const holdings = [
  {
    id: 1,
    name: 'Growth Equity Fund',
    amountHeld: 1250,
    pricePerToken: 46.80,
    totalValue: 58500
  },
  {
    id: 2,
    name: 'Tech Ventures Fund',
    amountHeld: 920,
    pricePerToken: 90.00,
    totalValue: 82800
  }
];

const portfolioValue = holdings.reduce((sum, holding) => sum + holding.totalValue, 0);

// Mock historical data for portfolio value
const portfolioHistory = [
  { date: 'Jan', value: 110000 },
  { date: 'Feb', value: 115000 },
  { date: 'Mar', value: 118000 },
  { date: 'Apr', value: 122000 },
  { date: 'May', value: 125000 },
  { date: 'Jun', value: 130000 },
  { date: 'Jul', value: 135000 },
  { date: 'Aug', value: 141300 },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Dashboard</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl mb-6">${portfolioValue.toLocaleString()}</div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => `${value.toLocaleString()}`}
                labelStyle={{ color: '#000' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#000" 
                strokeWidth={2}
                dot={{ fill: '#000' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {holdings.map((holding) => (
          <Card key={holding.id}>
            <CardHeader>
              <CardTitle>{holding.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Value Total</p>
                  <p className="text-lg">${holding.totalValue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount Held</p>
                  <p className="text-lg">{holding.amountHeld.toLocaleString()} tokens</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Price per Token</p>
                <p className="text-lg">${holding.pricePerToken.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={() => onNavigate('funds')} className="w-full max-w-md">
          View Available Funds
        </Button>
      </div>
    </div>
  );
}
