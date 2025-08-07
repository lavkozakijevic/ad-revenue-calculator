
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CalculatorIcon, Star, Image, BarChart3, Smartphone, Apple } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GENRES = [
  'Adventure',
  'Arcade & Action',
  'Board',
  'Brain & Puzzle',
  'Cards & Casino',
  'Kids & Family',
  'Music',
  'Racing',
  'Role Playing & Strategy',
  'Simulation',
  'Sports',
  'Trivia',
  'Word'
];

const ECPM_DATA = {
  "rewarded_video": {
    "ios": {
      "Adventure": { "US": 13.02, "Tier1": 10.15, "Tier2": 7.19, "Tier3": 3.46 },
      "Arcade & Action": { "US": 12.48, "Tier1": 11.52, "Tier2": 7.27, "Tier3": 3.31 },
      "Board": { "US": 18.00, "Tier1": 7.29, "Tier2": 6.37, "Tier3": 4.66 },
      "Brain & Puzzle": { "US": 11.78, "Tier1": 8.81, "Tier2": 5.99, "Tier3": 3.82 },
      "Cards & Casino": { "US": 13.13, "Tier1": 16.61, "Tier2": 7.90, "Tier3": 7.55 },
      "Kids & Family": { "US": 11.12, "Tier1": 10.33, "Tier2": 10.27, "Tier3": 7.30 },
      "Music": { "US": 14.93, "Tier1": 7.13, "Tier2": 5.27, "Tier3": 3.71 },
      "Racing": { "US": 14.55, "Tier1": 11.01, "Tier2": 7.36, "Tier3": 3.82 },
      "Role Playing & Strategy": { "US": 16.06, "Tier1": 17.56, "Tier2": 9.42, "Tier3": 6.30 },
      "Simulation": { "US": 13.63, "Tier1": 10.34, "Tier2": 7.22, "Tier3": 4.36 },
      "Sports": { "US": 12.84, "Tier1": 14.36, "Tier2": 9.35, "Tier3": 5.79 },
      "Trivia": { "US": 10.58, "Tier1": 14.64, "Tier2": 9.74, "Tier3": 5.48 },
      "Word": { "US": 10.33, "Tier1": 12.98, "Tier2": 6.64, "Tier3": 4.43 }
    },
    "android": {
      "Adventure": { "US": 9.19, "Tier1": 6.71, "Tier2": 2.47, "Tier3": 1.10 },
      "Arcade & Action": { "US": 10.22, "Tier1": 4.62, "Tier2": 1.94, "Tier3": 0.97 },
      "Board": { "US": 16.61, "Tier1": 7.50, "Tier2": 4.77, "Tier3": 2.52 },
      "Brain & Puzzle": { "US": 19.38, "Tier1": 9.27, "Tier2": 4.27, "Tier3": 2.05 },
      "Cards & Casino": { "US": 14.05, "Tier1": 8.53, "Tier2": 4.74, "Tier3": 3.09 },
      "Kids & Family": { "US": 10.79, "Tier1": 6.82, "Tier2": 9.96, "Tier3": 4.82 },
      "Music": { "US": 15.37, "Tier1": 8.52, "Tier2": 3.01, "Tier3": 2.55 },
      "Racing": { "US": 15.74, "Tier1": 10.70, "Tier2": 4.93, "Tier3": 1.97 },
      "Role Playing & Strategy": { "US": 21.42, "Tier1": 12.52, "Tier2": 4.65, "Tier3": 1.90 },
      "Simulation": { "US": 9.43, "Tier1": 5.16, "Tier2": 2.11, "Tier3": 1.34 },
      "Sports": { "US": 11.23, "Tier1": 9.09, "Tier2": 4.29, "Tier3": 2.24 },
      "Trivia": { "US": 8.05, "Tier1": 7.02, "Tier2": 3.56, "Tier3": 3.07 },
      "Word": { "US": 8.49, "Tier1": 4.07, "Tier2": 0.84, "Tier3": 1.61 }
    }
  },
  "interstitial": {
    "ios": {
      "Adventure": { "US": 12.11, "Tier1": 7.72, "Tier2": 5.05, "Tier3": 2.47 },
      "Arcade & Action": { "US": 11.41, "Tier1": 9.06, "Tier2": 5.94, "Tier3": 2.97 },
      "Board": { "US": 11.64, "Tier1": 6.98, "Tier2": 4.78, "Tier3": 3.51 },
      "Brain & Puzzle": { "US": 8.62, "Tier1": 5.77, "Tier2": 4.31, "Tier3": 3.48 },
      "Cards & Casino": { "US": 6.98, "Tier1": 4.97, "Tier2": 3.37, "Tier3": 3.99 },
      "Kids & Family": { "US": 8.36, "Tier1": 6.27, "Tier2": 5.50, "Tier3": 4.87 },
      "Music": { "US": 12.98, "Tier1": 4.22, "Tier2": 3.07, "Tier3": 2.56 },
      "Racing": { "US": 13.07, "Tier1": 8.02, "Tier2": 4.82, "Tier3": 2.87 },
      "Role Playing & Strategy": { "US": 11.57, "Tier1": 4.75, "Tier2": 3.53, "Tier3": 3.39 },
      "Simulation": { "US": 12.97, "Tier1": 8.20, "Tier2": 5.33, "Tier3": 3.02 },
      "Sports": { "US": 13.22, "Tier1": 7.48, "Tier2": 5.04, "Tier3": 3.53 },
      "Trivia": { "US": 16.40, "Tier1": 11.94, "Tier2": 6.82, "Tier3": 4.30 },
      "Word": { "US": 8.34, "Tier1": 8.09, "Tier2": 4.46, "Tier3": 4.12 }
    },
    "android": {
      "Adventure": { "US": 7.83, "Tier1": 4.58, "Tier2": 2.02, "Tier3": 0.87 },
      "Arcade & Action": { "US": 9.06, "Tier1": 4.69, "Tier2": 2.04, "Tier3": 0.98 },
      "Board": { "US": 10.61, "Tier1": 7.72, "Tier2": 3.03, "Tier3": 1.56 },
      "Brain & Puzzle": { "US": 15.56, "Tier1": 7.51, "Tier2": 3.25, "Tier3": 1.71 },
      "Cards & Casino": { "US": 9.47, "Tier1": 4.59, "Tier2": 1.92, "Tier3": 1.88 },
      "Kids & Family": { "US": 6.58, "Tier1": 5.58, "Tier2": 3.24, "Tier3": 2.11 },
      "Music": { "US": 0.65, "Tier1": 7.10, "Tier2": 2.51, "Tier3": 1.95 },
      "Racing": { "US": 7.80, "Tier1": 4.75, "Tier2": 2.18, "Tier3": 0.97 },
      "Role Playing & Strategy": { "US": 12.81, "Tier1": 13.51, "Tier2": 6.19, "Tier3": 1.60 },
      "Simulation": { "US": 8.01, "Tier1": 4.15, "Tier2": 1.53, "Tier3": 0.97 },
      "Sports": { "US": 7.14, "Tier1": 4.52, "Tier2": 2.26, "Tier3": 1.13 },
      "Trivia": { "US": 12.63, "Tier1": 8.51, "Tier2": 4.07, "Tier3": 2.87 },
      "Word": { "US": 9.43, "Tier1": 5.15, "Tier2": 1.49, "Tier3": 1.51 }
    }
  },
  "banner": {
    "ios": {
      "Adventure": { "US": 0.27, "Tier1": 0.14, "Tier2": 0.13, "Tier3": 0.09 },
      "Arcade & Action": { "US": 0.21, "Tier1": 0.17, "Tier2": 0.16, "Tier3": 0.12 },
      "Board": { "US": 0.23, "Tier1": 0.10, "Tier2": 0.08, "Tier3": 0.11 },
      "Brain & Puzzle": { "US": 0.18, "Tier1": 0.07, "Tier2": 0.09, "Tier3": 0.07 },
      "Cards & Casino": { "US": 0.20, "Tier1": 0.10, "Tier2": 0.06, "Tier3": 0.07 },
      "Kids & Family": { "US": 0.52, "Tier1": 0.54, "Tier2": 0.14, "Tier3": 0.21 },
      "Music": { "US": 0.46, "Tier1": 0.18, "Tier2": 0.13, "Tier3": 0.11 },
      "Racing": { "US": 0.26, "Tier1": 0.17, "Tier2": 0.11, "Tier3": 0.15 },
      "Role Playing & Strategy": { "US": 0.27, "Tier1": 0.14, "Tier2": 0.09, "Tier3": 0.09 },
      "Simulation": { "US": 0.25, "Tier1": 0.15, "Tier2": 0.12, "Tier3": 0.08 },
      "Sports": { "US": 0.26, "Tier1": 0.17, "Tier2": 0.11, "Tier3": 0.23 },
      "Trivia": { "US": 0.11, "Tier1": 0.18, "Tier2": 0.11, "Tier3": 0.11 },
      "Word": { "US": 0.17, "Tier1": 0.10, "Tier2": 0.07, "Tier3": 0.05 }
    },
    "android": {
      "Adventure": { "US": 0.54, "Tier1": 0.31, "Tier2": 0.20, "Tier3": 0.11 },
      "Arcade & Action": { "US": 0.69, "Tier1": 0.38, "Tier2": 0.23, "Tier3": 0.13 },
      "Board": { "US": 0.42, "Tier1": 0.13, "Tier2": 0.10, "Tier3": 0.08 },
      "Brain & Puzzle": { "US": 0.43, "Tier1": 0.13, "Tier2": 0.10, "Tier3": 0.08 },
      "Cards & Casino": { "US": 0.34, "Tier1": 0.14, "Tier2": 0.09, "Tier3": 0.04 },
      "Kids & Family": { "US": 0.37, "Tier1": 0.20, "Tier2": 0.13, "Tier3": 0.09 },
      "Music": { "US": 0.08, "Tier1": 0.32, "Tier2": 0.23, "Tier3": 0.12 },
      "Racing": { "US": 0.37, "Tier1": 0.20, "Tier2": 0.13, "Tier3": 0.17 },
      "Role Playing & Strategy": { "US": 0.27, "Tier1": 0.20, "Tier2": 0.12, "Tier3": 0.12 },
      "Simulation": { "US": 0.36, "Tier1": 0.17, "Tier2": 0.12, "Tier3": 0.09 },
      "Sports": { "US": 0.28, "Tier1": 0.06, "Tier2": 0.06, "Tier3": 0.05 },
      "Trivia": { "US": 0.37, "Tier1": 0.20, "Tier2": 0.05, "Tier3": 0.05 },
      "Word": { "US": 0.29, "Tier1": 0.14, "Tier2": 0.04, "Tier3": 0.06 }
    }
  }
};

const impressionsPerDAU = { 
  rewarded_video: 4, 
  interstitial: 4, 
  banner: 150 
};

export default function AdRevenueCalculator() {
  const [genre, setGenre] = useState('');
  const [platforms, setPlatforms] = useState({ ios: false, android: false });
  const [adFormats, setAdFormats] = useState({ rewarded_video: false, interstitial: false, banner: false });
  const [dau, setDau] = useState({ US: '', Tier1: '', Tier2: '', Tier3: '' });
  const [email, setEmail] = useState('');
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canCalculate = () => {
    const hasGenre = genre !== '';
    const hasPlatform = platforms.ios || platforms.android;
    const hasAdFormat = adFormats.rewarded_video || adFormats.interstitial || adFormats.banner;
    const hasDau = Object.values(dau).some(value => value && parseInt(value) > 0);
    const hasValidEmail = isValidEmail(email);
    
    return hasGenre && hasPlatform && hasAdFormat && hasDau && hasValidEmail;
  };

  const calculateRevenue = () => {
    if (!canCalculate()) return;
    
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculationResults = [];
      
      // Calculate for each ad format first, then platform
      Object.entries(adFormats).forEach(([format, enabled]) => {
        if (!enabled) return;
        
        const formatData = {
          format,
          platforms: [],
          totalRevenue: 0
        };
        
        Object.entries(platforms).forEach(([platform, enabled]) => {
          if (!enabled) return;
          
          const platformKey = platform === 'ios' ? 'ios' : 'android';
          const regionResults = [];
          let platformTotal = 0;
          
          // Calculate for each region with DAU > 0
          Object.entries(dau).forEach(([region, dauValue]) => {
            const dauNum = parseInt(dauValue);
            if (!dauNum || dauNum <= 0) return;
            
            const ecpm = ECPM_DATA[format][platformKey][genre][region];
            const impressions = impressionsPerDAU[format];
            const monthlyRevenue = (dauNum * impressions * 30) / 1000 * ecpm;
            
            regionResults.push({
              region,
              dau: dauNum,
              revenue: monthlyRevenue
            });
            
            platformTotal += monthlyRevenue;
          });
          
          if (regionResults.length > 0) {
            formatData.platforms.push({
              platform: platformKey,
              regions: regionResults,
              total: platformTotal
            });
            formatData.totalRevenue += platformTotal;
          }
        });
        
        if (formatData.platforms.length > 0) {
          calculationResults.push(formatData);
        }
      });
      
      setResults(calculationResults);
      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getFormatDisplayName = (format) => {
    switch(format) {
      case 'rewarded_video': return 'Rewarded Video';
      case 'interstitial': return 'Interstitial Ads';
      case 'banner': return 'Banner Ads';
      default: return format;
    }
  };

  const getFormatIcon = (format) => {
    switch(format) {
      case 'rewarded_video': return Star;
      case 'interstitial': return BarChart3;
      case 'banner': return Image;
      default: return BarChart3;
    }
  };

  const getPlatformIcon = (platform) => {
    return platform === 'ios' ? Apple : Smartphone;
  };

  const getRegionDisplayName = (region) => {
    switch(region) {
      case 'US': return 'United States';
      case 'Tier1': return 'Tier 1';
      case 'Tier2': return 'Tier 2';
      case 'Tier3': return 'Tier 3';
      default: return region;
    }
  };

  const getTotalRevenue = () => {
    if (!results) return 0;
    return results.reduce((sum, formatData) => sum + formatData.totalRevenue, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-xl shadow-sm">
              <CalculatorIcon className="w-6 h-6 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Ad Revenue Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Calculate your estimated monthly revenue based off real market data</p>
        </div>

        <Card className="mb-8 shadow-sm border-0">
          <CardContent className="p-8 space-y-8">
            {/* Game Genre */}
            <div className="space-y-3">
              <Label className="text-base font-medium text-gray-900">Game genre</Label>
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger className="h-12 text-gray-500 border-gray-200">
                  <SelectValue placeholder="Select your game genre" />
                </SelectTrigger>
                <SelectContent>
                  {GENRES.map((g) => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Platform Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium text-gray-900">Platform selection</Label>
              <div className="space-y-3">
                <div 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    platforms.ios 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setPlatforms(prev => ({ ...prev, ios: !prev.ios }))}
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Apple className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">App Store</div>
                  </div>
                </div>
                <div 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    platforms.android 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setPlatforms(prev => ({ ...prev, android: !prev.android }))}
                >
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Smartphone className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Format Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium text-gray-900">Ad format selection</Label>
              <div className="space-y-3">
                <div 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    adFormats.rewarded_video 
                      ? 'border-yellow-500 bg-yellow-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setAdFormats(prev => ({ ...prev, rewarded_video: !prev.rewarded_video }))}
                >
                  <Star className="w-5 h-5 text-yellow-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Rewarded video</div>
                  </div>
                </div>
                <div 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    adFormats.interstitial 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setAdFormats(prev => ({ ...prev, interstitial: !prev.interstitial }))}
                >
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Interstitial ads</div>
                  </div>
                </div>
                <div 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    adFormats.banner 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setAdFormats(prev => ({ ...prev, banner: !prev.banner }))}
                >
                  <Image className="w-5 h-5 text-blue-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Banner ads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* DAU Inputs */}
            <div className="space-y-4">
              <Label className="text-base font-medium text-gray-900">Daily active users (DAU) by region</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="United States"
                    value={dau.US}
                    onChange={(e) => setDau(prev => ({ ...prev, US: e.target.value }))}
                    className="h-12 border-gray-200"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Tier 1 countries"
                    value={dau.Tier1}
                    onChange={(e) => setDau(prev => ({ ...prev, Tier1: e.target.value }))}
                    className="h-12 border-gray-200"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Tier 2 countries"
                    value={dau.Tier2}
                    onChange={(e) => setDau(prev => ({ ...prev, Tier2: e.target.value }))}
                    className="h-12 border-gray-200"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Tier 3 countries"
                    value={dau.Tier3}
                    onChange={(e) => setDau(prev => ({ ...prev, Tier3: e.target.value }))}
                    className="h-12 border-gray-200"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-3">
              <Label className="text-base font-medium text-gray-900">Email address</Label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-200"
              />
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting you agree we may store your email and contact you about Game Scout. We <strong>do not</strong> share data with third parties.
              </p>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateRevenue}
              disabled={!canCalculate() || isCalculating}
              className="w-full h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isCalculating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Calculating...
                </div>
              ) : (
                'Calculate expected ad revenue'
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {results && results.length > 0 && (
          <div className="space-y-6">
            {/* Total Revenue */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                    Total Monthly Revenue
                  </span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {formatCurrency(getTotalRevenue())}
                </div>
                <div className="text-sm text-gray-500">
                  ** Estimated ad revenue per month
                </div>
              </CardContent>
            </Card>

            {/* Revenue Breakdown by Ad Format */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Breakdown by Ad Format</h3>
              
              {results.map((formatData, index) => {
                const FormatIcon = getFormatIcon(formatData.format);
                
                return (
                  <Card key={index} className="shadow-sm border border-gray-200 overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b py-3 px-4">
                      <CardTitle className="flex items-center gap-3 text-base">
                        <div className="flex items-center gap-2 text-blue-600">
                          <FormatIcon className="w-4 h-4" />
                          <span>{getFormatDisplayName(formatData.format)}</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="px-4 py-3 border-b bg-white">
                        <div className="text-sm text-gray-600 mb-1">
                          Total Revenue for {getFormatDisplayName(formatData.format)}
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          {formatCurrency(formatData.totalRevenue)}
                        </div>
                      </div>
                      
                      {formatData.platforms.map((platformData, platformIndex) => {
                        const PlatformIcon = getPlatformIcon(platformData.platform);
                        
                        return (
                          <div key={platformIndex} className="border-b last:border-b-0">
                            <div className="px-4 py-3 bg-gray-50 flex items-center gap-2">
                              <PlatformIcon className="w-4 h-4 text-gray-600" />
                              <span className="text-sm font-medium text-gray-900">
                                {platformData.platform === 'ios' ? 'App Store' : 'Google Play'}
                              </span>
                            </div>
                            <div className="px-4 py-2">
                              <div className="text-lg font-semibold text-gray-900 mb-3">
                                {formatCurrency(platformData.total)}
                              </div>
                              <div className="space-y-2">
                                {platformData.regions.map((region, regionIndex) => (
                                  <div key={regionIndex} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">
                                      {getRegionDisplayName(region.region)}:
                                    </span>
                                    <span className="font-medium text-gray-900">
                                      {formatCurrency(region.revenue)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-sm text-amber-800">
                <strong>Disclaimer:</strong> Benchmarks are monthly averages; actual results may differ.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
