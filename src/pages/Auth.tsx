import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, CreditCard, Shield } from 'lucide-react';

/**
 * WooCommerce Template Mapping:
 * - Login form: woocommerce_myaccount_login_form
 * - Register form: woocommerce_myaccount_register_form
 * - Page: myaccount/form-login.php
 */

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // WooCommerce login handler
    console.log('Login:', { loginEmail, loginPassword, rememberMe });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // WooCommerce register handler
    console.log('Register:', { registerFirstName, registerLastName, registerEmail, registerPassword });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
              MY ACCOUNT
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your orders and downloads
            </p>
          </div>

          {/* Split Screen Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Login Form - woocommerce_myaccount_login_form */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold uppercase mb-2">
                Welcome back
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Sign in to your account
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-12 py-6"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-12 py-6"
                      required
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="remember-me"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember-me" className="text-sm cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-secondary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full rounded-full">
                  LOG IN
                </Button>

                {/* Continue Shopping */}
                <div className="text-center">
                  <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground">
                    ← Continue shopping
                  </Link>
                </div>
              </form>
            </div>

            {/* Register Form - woocommerce_myaccount_register_form */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold uppercase mb-2">
                Create your account
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Join thousands of happy customers
              </p>

              <form onSubmit={handleRegister} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-firstname">First name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="register-firstname"
                        type="text"
                        placeholder="John"
                        value={registerFirstName}
                        onChange={(e) => setRegisterFirstName(e.target.value)}
                        className="pl-12 py-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-lastname">Last name</Label>
                    <Input
                      id="register-lastname"
                      type="text"
                      placeholder="Doe"
                      value={registerLastName}
                      onChange={(e) => setRegisterLastName(e.target.value)}
                      className="py-6"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="you@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="pl-12 py-6"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="pl-12 py-6"
                      required
                    />
                  </div>
                </div>

                {/* Register Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full rounded-full">
                  CREATE ACCOUNT
                </Button>

                {/* Dashboard Note */}
                <p className="text-xs text-muted-foreground text-center">
                  You'll be able to track orders and downloads in your dashboard.
                </p>
              </form>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CreditCard className="w-5 h-5" />
              <span>Stripe</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082H9.326l-1.335 8.477h4.508c.456 0 .845-.334.917-.788l.038-.195.726-4.587.047-.254a.925.925 0 0 1 .917-.789h.577c3.735 0 6.657-1.517 7.513-5.905.322-1.644.168-3.017-.612-3.754z"/>
              </svg>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
