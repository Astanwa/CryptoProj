import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { TrendingUp, Clock, Users } from 'lucide-react';

interface AvailableFundsProps {
  onViewDetails: () => void;
}

const availableFunds = [
  {
    id: 1,
    name: 'Innovation Tech Fund',
    description: 'Focused on emerging technology companies with high growth potential',
    minInvestment: 25000,
    targetReturn: '15-20%',
    term: '5 years',
    investors: 47,
    status: 'open'
  },
  {
    id: 2,
    name: 'Sustainable Energy Fund',
    description: 'Investments in renewable energy and clean technology sectors',
    minInvestment: 50000,
    targetReturn: '12-18%',
    term: '7 years',
    investors: 32,
    status: 'open'
  },
  {
    id: 3,
    name: 'Healthcare Innovation Fund',
    description: 'Healthcare and biotech companies driving medical innovation',
    minInvestment: 100000,
    targetReturn: '18-25%',
    term: '6 years',
    investors: 28,
    status: 'open'
  },
  {
    id: 4,
    name: 'Asia-Pacific Growth Fund',
    description: 'High-growth opportunities in emerging Asian markets',
    minInvestment: 75000,
    targetReturn: '20-28%',
    term: '8 years',
    investors: 41,
    status: 'closing soon'
  }
];

export function AvailableFunds({ onViewDetails }: AvailableFundsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Available Funds</h1>
        <p className="text-gray-600">Explore investment opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableFunds.map((fund) => (
          <Card key={fund.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{fund.name}</CardTitle>
                  <CardDescription className="mt-2">{fund.description}</CardDescription>
                </div>
                <Badge variant={fund.status === 'open' ? 'default' : 'secondary'}>
                  {fund.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Min. Investment</div>
                  <div>${fund.minInvestment.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Target Return</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>{fund.targetReturn}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{fund.term}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{fund.investors} investors</span>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => {
                  if (fund.id === 1) {
                    onViewDetails();
                  }
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
