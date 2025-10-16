import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';

interface FundDetailProps {
  onBack: () => void;
}

// Mock historical data for fund value
const fundHistory = [
  { date: 'Jan', value: 85 },
  { date: 'Feb', value: 88 },
  { date: 'Mar', value: 92 },
  { date: 'Apr', value: 95 },
  { date: 'May', value: 98 },
  { date: 'Jun', value: 102 },
  { date: 'Jul', value: 108 },
  { date: 'Aug', value: 115 },
];

const tokensRemaining = 2450;
const pricePerToken = 115;
const totalValue = tokensRemaining * pricePerToken;

export function FundDetail({ onBack }: FundDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div>
        <h1 className="mb-2">Innovation Tech Fund</h1>
        <p className="text-gray-600">Focused on emerging technology companies with high growth potential</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fund Value Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={fundHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => `$${value.toFixed(2)}`}
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

      <Card>
        <CardHeader>
          <CardTitle>Available Tokens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Tokens Remaining</p>
              <p className="text-2xl">{tokensRemaining.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price per Token</p>
              <p className="text-2xl">${pricePerToken.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Value Available</p>
            <p className="text-2xl">${totalValue.toLocaleString()}</p>
          </div>
          <Button className="w-full mt-4">Buy Here</Button>
        </CardContent>
      </Card>
    </div>
  );
}
