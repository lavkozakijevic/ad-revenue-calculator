
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CalculatorIcon } from "lucide-react";
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
                  <div className="rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" id="Apple-App-Store--Streamline-Svg-Logos" height="24" width="24">
                  <desc>
                     Apple App Store Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path fill="url(#a)" d="M21.5859 1h52.8282C85.7834 1 95 10.2166 95 21.5859v52.8282C95 85.7834 85.7834 95 74.4141 95H21.5859C10.2166 95 1 85.7834 1 74.4141V21.5859C1 10.2166 10.2166 1 21.5859 1Z"></path>
                  <path fill="#ffffff" d="m31.1245 69.2268.0088.0028-3.2139 5.5666c-1.1731 2.0319-3.7715 2.7281-5.8034 1.555-2.0318-1.173-2.7281-3.7714-1.555-5.8034l2.3676-4.1007.2272-.3935c.4058-.5834 1.4071-1.5898 3.4101-1.4006 0 0 4.7135.5115 5.0546 2.9614.0001 0 .0466.8061-.496 1.6124ZM76.7084 55.009H66.6863c-.6825-.0457-.9806-.2895-1.0976-.4311l-.0074-.013L54.8529 35.983l-.0138.0093-.6435-.9226c-1.0544-1.6124-2.7288 2.5118-2.7288 2.5118-1.9992 4.5955.2836 9.8205 1.0797 11.3997l14.901 25.8092c1.173 2.0319 3.7713 2.7282 5.8033 1.555 2.0318-1.173 2.728-3.7714 1.5549-5.8033l-3.7261-6.4538c-.0721-.1563-.1978-.581.5663-.5826h5.0625c2.3462 0 4.2483-1.9021 4.2483-4.2484 0-2.3463-1.9021-4.2483-4.2483-4.2483Zm-19.4661 5.7755s.5349 2.7211-1.535 2.7211h-2.0699l-34.9789.0001c-2.3463 0-4.2483-1.9021-4.2483-4.2484 0-2.3463 1.902-4.2483 4.2483-4.2483h9.5248c1.5378-.0892 1.9024-.9768 1.9024-.9768l.0084.0042 12.4331-21.5348-.0037-.0008c.2267-.416.0379-.809.0051-.8713l-4.106-7.1117c-1.1732-2.032-.477-4.6303 1.5549-5.8034 2.032-1.1732 4.6302-.4769 5.8034 1.555l1.9043 3.2984 1.9009-3.2925c1.1731-2.032 3.7714-2.7282 5.8033-1.555 2.032 1.1732 2.7282 3.7715 1.555 5.8033l-17.301 29.9662c-.0757.1824-.0988.4687.464.5192h10.3415l.0023.1007s5.9771.093 6.7911 5.6748Z"></path>
                  <defs>
                    <linearGradient id="a" x1="4701" x2="4701" y1="1" y2="9401" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#17c9fb"></stop>
                      <stop offset="1" stop-color="#1a74e8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
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
                  <div className="rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Google-Play-Icon--Streamline-Svg-Logos" height="24" width="24">
                    <desc>
                      Google Play Icon Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path fill="#ea4335" d="M11.297225 11.4742 1.43933 21.802225c0.224315 0.79505 0.8035175 1.44175 1.56912 1.752025 0.7656 0.31025 1.631625 0.249225 2.346125 -0.16535l11.091975 -6.3173 -5.149325 -5.5974Z" stroke-width="0.25"></path>
                    <path fill="#fbbc04" d="M21.265375 9.7186 16.46865 6.9713 11.069575 11.709275l5.421125 5.34765 4.76 -2.7179c0.8595 -0.450025 1.398125 -1.340025 1.398125 -2.310225s-0.538625 -1.860175 -1.398125 -2.3102h0.014675Z" stroke-width="0.25"></path>
                    <path fill="#4285f4" d="M1.4394 2.2039575c-0.0595875 0.2202875 -0.0892375 0.4475925 -0.088175 0.6757925v18.246675c0.000625 0.2281 0.030245 0.455175 0.088175 0.6758l10.1958 -10.063575L1.4394 2.2039575Z" stroke-width="0.25"></path>
                    <path fill="#34a853" d="m11.3707 12.0031 5.0979 -5.0318L5.3913 0.62464c-0.416725 -0.2440675 -0.8907 -0.3733325 -1.373625 -0.374635C2.81905 0.24763525 1.7653225 1.0431925 1.43933 2.196615L11.3707 12.0031Z" stroke-width="0.25"></path>
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Grade--Streamline-Rounded-Material" height="24" width="24" className="text-yellow-400">
                    <desc>
                      Grade Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path fill="currentColor" d="m8.075 17.87505 3.925 -2.35 3.925 2.375 -1.05 -4.45 3.45 -3 -4.55 -0.4 -1.775 -4.2 -1.775 4.175 -4.55 0.4 3.45 3 -1.05 4.45Zm3.925 -0.6 -4.65 2.8c-0.13335 0.08335 -0.275 0.12085 -0.425 0.1125 -0.15 -0.00835 -0.28335 -0.05415 -0.4 -0.1375 -0.11665 -0.08335 -0.20415 -0.19165 -0.2625 -0.325 -0.05835 -0.13335 -0.07085 -0.28335 -0.0375 -0.45l1.225 -5.3 -4.099995 -3.575c-0.13333 -0.11665 -0.2125 -0.24585 -0.2375 -0.3875 -0.025 -0.14165 -0.02083 -0.27915 0.0125 -0.4125 0.033335 -0.13335 0.108335 -0.24585 0.225 -0.3375 0.11667 -0.09165 0.258335 -0.14585 0.425 -0.1625l5.424995 -0.475 2.1 -5c0.06665 -0.15 0.16665 -0.2625 0.3 -0.3375 0.13335 -0.075 0.26665 -0.1125 0.4 -0.1125 0.13335 0 0.26665 0.0375 0.4 0.1125 0.13335 0.075 0.23335 0.1875 0.3 0.3375l2.1 5 5.425 0.475c0.16665 0.01665 0.30835 0.07085 0.425 0.1625 0.11665 0.09165 0.19165 0.20415 0.225 0.3375 0.03335 0.13335 0.0375 0.27085 0.0125 0.4125 -0.025 0.14165 -0.10415 0.27085 -0.2375 0.3875l-4.1 3.575 1.225 5.3c0.03335 0.16665 0.02085 0.31665 -0.0375 0.45 -0.05835 0.13335 -0.14585 0.24165 -0.2625 0.325 -0.11665 0.08335 -0.25 0.12915 -0.4 0.1375 -0.15 0.00835 -0.29165 -0.02915 -0.425 -0.1125l-4.65 -2.8Z" stroke-width="0.5"></path>
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Pause--Streamline-Rounded-Material" height="24" width="24" className="text-purple-500">
                    <desc>
                      Pause Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path fill="currentColor" d="M14.625 19c-0.4125 0 -0.7656 -0.1469 -1.05925 -0.44075 -0.29385 -0.29365 -0.44075 -0.64675 -0.44075 -1.05925V6.5c0 -0.4125 0.1469 -0.76565 0.44075 -1.0595 0.29365 -0.29365 0.64675 -0.4405 1.05925 -0.4405H17.5c0.4125 0 0.76565 0.14685 1.0595 0.4405 0.29365 0.29385 0.4405 0.647 0.4405 1.0595v11c0 0.4125 -0.14685 0.7656 -0.4405 1.05925C18.26565 18.8531 17.9125 19 17.5 19h-2.875ZM6.5 19c-0.4125 0 -0.7656 -0.1469 -1.05925 -0.44075C5.1469 18.2656 5 17.9125 5 17.5V6.5c0 -0.4125 0.1469 -0.76565 0.44075 -1.0595C5.7344 5.14685 6.0875 5 6.5 5h2.875c0.4125 0 0.76565 0.14685 1.0595 0.4405 0.29365 0.29385 0.4405 0.647 0.4405 1.0595v11c0 0.4125 -0.14685 0.7656 -0.4405 1.05925 -0.29385 0.29385 -0.647 0.44075 -1.0595 0.44075H6.5Zm8.125 -1.5H17.5V6.5h-2.875v11ZM6.5 17.5h2.875V6.5H6.5v11Z" stroke-width="0.5"></path>
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Planner-Banner-Ad-Pt--Streamline-Rounded-Material" height="24" width="24" className="text-blue-500">
                    <desc>
                      Planner Banner Ad Pt Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path fill="currentColor" d="M5.5 22c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05V3.5c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h13c0.4 0 0.75 0.15 1.05 0.45 0.3 0.3 0.45 0.65 0.45 1.05v17c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H5.5Zm0 -1.5h13V3.5H5.5v17Zm5.7 -3.3 -1.45 -1.825c-0.08335 -0.1 -0.18335 -0.15 -0.3 -0.15 -0.11665 0 -0.21665 0.05 -0.3 0.15l-1.6 2.1c-0.1 0.13335 -0.1125 0.26665 -0.0375 0.4 0.075 0.13335 0.1875 0.2 0.3375 0.2h8.425c0.1535 0 0.26265 -0.06665 0.3275 -0.2 0.065 -0.13335 0.05585 -0.26665 -0.0275 -0.4l-2.45 -3.275c-0.08335 -0.1 -0.18335 -0.15 -0.3 -0.15 -0.11665 0 -0.21665 0.05 -0.3 0.15l-2.325 3Z" stroke-width="0.5"></path>
                  </svg>
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
