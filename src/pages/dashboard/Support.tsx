import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Plus,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

/**
 * WooCommerce Custom Endpoint: /my-account/support/
 * This would be a custom plugin/endpoint in WooCommerce
 */

// Mock tickets data
const tickets = [
  {
    id: 'TKT-001',
    subject: 'Need to change logo file',
    status: 'Open',
    lastUpdate: '2 hours ago',
  },
  {
    id: 'TKT-002',
    subject: 'Question about 4K upgrade',
    status: 'Resolved',
    lastUpdate: '3 days ago',
  },
];

const statusColors: Record<string, string> = {
  Open: 'bg-yellow-100 text-yellow-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  Resolved: 'bg-green-100 text-green-700',
};

const Support = () => {
  const [newTicketOpen, setNewTicketOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit ticket:', { subject, message });
    setNewTicketOpen(false);
    setSubject('');
    setMessage('');
  };

  return (
    <DashboardLayout title="Support" subtitle="Get help with your orders and account.">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Dialog open={newTicketOpen} onOpenChange={setNewTicketOpen}>
          <DialogTrigger asChild>
            <button className="bg-card border border-border rounded-xl p-6 text-left hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold uppercase mb-1">
                Open a Ticket
              </h3>
              <p className="text-sm text-muted-foreground">
                Create a new support request
              </p>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-display uppercase">
                Open Support Ticket
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmitTicket} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-subject">Subject</Label>
                <Input
                  id="ticket-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-message">Message</Label>
                <Textarea
                  id="ticket-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your issue in detail..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full rounded-full">
                Submit Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <a
          href="mailto:support@digitalwork.gr"
          className="bg-card border border-border rounded-xl p-6 text-left hover:shadow-card transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold uppercase mb-1">
            Email Support
          </h3>
          <p className="text-sm text-muted-foreground">
            support@digitalwork.gr
          </p>
        </a>

        <Link
          to="/faq"
          className="bg-card border border-border rounded-xl p-6 text-left hover:shadow-card transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="font-display font-bold uppercase mb-1">
            FAQs
          </h3>
          <p className="text-sm text-muted-foreground">
            Find quick answers
          </p>
        </Link>
      </div>

      {/* Tickets List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-display font-bold uppercase">
            Your Tickets
          </h2>
        </div>

        {tickets.length > 0 ? (
          <div className="divide-y divide-border">
            {tickets.map((ticket) => (
              <Link
                key={ticket.id}
                to={`/my-account/support/${ticket.id}`}
                className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{ticket.subject}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {ticket.id}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {ticket.lastUpdate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={statusColors[ticket.status]}>
                    {ticket.status === 'Resolved' && (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    )}
                    {ticket.status}
                  </Badge>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display font-bold mb-2">No Tickets Yet</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Need help? Open a support ticket above.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Support;
