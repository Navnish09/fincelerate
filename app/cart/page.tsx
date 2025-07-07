"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  TypographyLarge,
  TypographySmall
} from "@/components/ui/typography";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Fund {
  id: string;
  name: string;
  category: string;
  type: string;
  amount: number;
  minAmount?: number;
  maxAmount?: number;
}

export interface CartItem extends Fund {
  quantity?: number;
}

interface MobileInvestmentSummaryProps {
  funds: CartItem[];
  totalAmount: number;
  isLoading: boolean;
  onSaveForLater: () => void;
  onContinueToInvest: () => void;
}

export function MobileInvestmentSummary({
  funds,
  totalAmount,
  isLoading,
  onSaveForLater,
  onContinueToInvest,
}: MobileInvestmentSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-background lg:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-lg rounded-b-none border-t shadow-lg">
      <CardContent className="">
        {/* Collapsed View */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Total Investment
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-auto p-1"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </Button>
          </div>
          <span className="text-lg font-semibold text-green-600 dark:text-green-400">
            ₹ {totalAmount.toLocaleString()}
          </span>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mb-4">
            <div className="flex flex-col gap-3 mb-4">
              <h3 className="text-sm font-medium">Investment Breakdown</h3>
              {funds.map((fund, index) => (
                <div
                  key={fund.id}
                  className="flex justify-between items-start gap-2"
                >
                  <span className="text-xs text-muted-foreground flex-1 break-words">
                    Axis Nifty 500 Momentum {index === 0 ? "( G )" : ""}
                  </span>
                  <span className="text-xs font-medium whitespace-nowrap">
                    ₹ {fund.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <Separator className="mb-4" />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onSaveForLater}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
              ) : null}
              Save for Later
            </Button>
            <Button
              onClick={onContinueToInvest}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
              ) : null}
              Continue to Invest
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Mock data - replace with API calls later
const mockFunds: Fund[] = [
  {
    id: "1",
    name: "Axis Nifty 500 Momentum(G)-Growth",
    category: "ELSS",
    type: "SIP",
    amount: 2000,
    minAmount: 500,
    maxAmount: 50000,
  },
  {
    id: "2",
    name: "Axis Nifty 500 Momentum(G)-IDCW",
    category: "ELSS",
    type: "SIP",
    amount: 2000,
    minAmount: 500,
    maxAmount: 50000,
  },
  {
    id: "3",
    name: "Axis Nifty 500 Momentum(G)-Growth",
    category: "ELSS",
    type: "SIP",
    amount: 2000,
    minAmount: 500,
    maxAmount: 50000,
  },
];

export default function Component() {
  const [funds, setFunds] = useState<CartItem[]>(mockFunds);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    fundId: string;
    fundName: string;
  }>({
    open: false,
    fundId: "",
    fundName: "",
  });

  // Calculate total amount
  const totalAmount = funds.reduce((sum, fund) => sum + fund.amount, 0);

  // Add fund to basket - placeholder for API call
  // const addFund = useCallback(async (fund: Fund) => {
  //   setIsLoading(true);

  //   try {
  //     // TODO: Replace with API call
  //     // const response = await api.addFundToBasket(fund)

  //     // Simulate API delay
  //     await new Promise((resolve) => setTimeout(resolve, 500));

  //     setFunds((prev) => [...prev, fund]);
  //   } catch (err) {
  //     console.error("Add fund error:", err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // Remove fund from basket - placeholder for API call
  const removeFund = useCallback(async (fundId: string) => {
    setIsLoading(true);

    try {
      // TODO: Replace with API call
      // const response = await api.removeFundFromBasket(fundId)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      setFunds((prev) => prev.filter((fund) => fund.id !== fundId));
      setDeleteDialog({ open: false, fundId: "", fundName: "" });
    } catch (err) {
      console.error("Remove fund error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save basket for later - placeholder for API call
  const saveForLater = useCallback(async () => {
    setIsLoading(true);

    try {
      // TODO: Replace with API call
      // const response = await api.saveBasketForLater(funds)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Basket saved for later:", funds);
      // You might want to show a success message here
    } catch (err) {
      console.error("Save basket error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [funds]);

  // Continue to invest - placeholder for API call
  const continueToInvest = useCallback(async () => {
    setIsLoading(true);

    try {
      // TODO: Replace with API call
      // const response = await api.proceedToInvestment(funds)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Proceeding to investment:", funds);
      // Navigate to investment page or show next step
    } catch (err) {
      console.error("Investment error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [funds]);

  // Handle remove fund button click
  const handleRemoveFund = (fundId: string, fundName: string) => {
    setDeleteDialog({
      open: true,
      fundId,
      fundName,
    });
  };

  // Handle confirmed deletion
  const handleConfirmDelete = () => {
    if (deleteDialog.fundId) {
      removeFund(deleteDialog.fundId);
    }
  };

  // Handle add more funds
  const handleAddMoreFunds = () => {
    // TODO: Navigate to fund selection page or open modal
    console.log("Add more funds clicked");
  };

  return (
    <div className="min-h-screen bg-card/30 text-foreground pt-36 pb-20">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ShoppingBasket className="w-6 h-6" />
                <h1 className="text-xl md:text-2xl font-semibold">
                  Your Fund Basket
                </h1>
              </div>
              <TypographySmall className="text-secondary2">
                Here is the basket of funds which you have selected to start
                your wealth creation journey
              </TypographySmall>
            </div>

            {/* Fund List */}
            <div className="flex flex-col gap-6">
              {funds.length === 0 ? (
                <Card className="bg-card">
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Your basket is empty
                    </p>
                    <Button onClick={handleAddMoreFunds}>
                      <Plus className="w-4 h-4" />
                      Add Funds
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                funds.map((fund) => (
                  <Card key={fund.id} className="bg-background">
                    <CardContent className="">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        {/* Fund Logo */}
                        <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                          <span className="font-bold text-sm">A</span>
                        </div>

                        {/* Fund Details */}
                        <div className="flex-1 min-w-0">
                          <TypographyLarge className="break-words">
                            {fund.name}
                          </TypographyLarge>
                          <div className="flex flex-wrap flex-col gap-2">
                            <div className="text-xs text-muted-foreground">
                              Category:{" "}
                              <span className="text-whites">
                                {fund.category}
                              </span>
                            </div>
                            <div>
                              <TypographySmall className="inline-flex text-secondary2">
                                {fund.type}
                              </TypographySmall>
                            </div>
                          </div>
                        </div>

                        {/* Amount and Remove Button */}
                        <div className="flex justify-between sm:justify-start sm:flex-col items-end gap-3 w-full sm:w-auto">
                          <div className="text-lg md:text-xl font-semibold">
                            ₹{fund.amount.toLocaleString()}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveFund(fund.id, fund.name)}
                            disabled={isLoading}
                            className="border-destructive hover:bg-destructive/20 hover:text-destructive-foreground text-xs"
                          >
                            <Trash2 className="w-3 h-3 mr-1 text-destructive" />
                            Remove Fund
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Add More Funds Button */}
            {!!funds.length && (
              <Button
                onClick={handleAddMoreFunds}
                disabled={isLoading}
                className="w-full"
              >
                <Plus className="w-4 h-4" />
                Add more funds
              </Button>
            )}
          </div>

          {/* Desktop Investment Cart Sidebar */}
          {funds.length > 0 && (
            <div className="hidden lg:block lg:w-80">
              <Card className="sticky top-6 bg-background border-none">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-6">
                    Review Your Investment Cart
                  </h2>

                  <div className="flex flex-col gap-4 mb-6">
                    {funds.map((fund, index) => (
                      <div
                        key={fund.id}
                        className="flex justify-between items-start gap-2"
                      >
                        <span className="text-sm text-muted-foreground flex-1 break-words">
                          Axis Nifty 500 Momentum {index === 0 ? "( G )" : ""}
                        </span>
                        <span className="text-sm font-medium whitespace-nowrap">
                          ₹ {fund.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-success font-semibold">
                      Grand Total
                    </span>
                    <span className="text-success font-semibold text-lg">
                      ₹ {totalAmount.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={saveForLater}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : null}
                      Save for Later
                    </Button>
                    <Button onClick={continueToInvest} disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : null}
                      Continue to Invest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Mobile Investment Summary - Sticky Bottom */}
        {funds.length > 0 && (
          <MobileInvestmentSummary
            funds={funds}
            totalAmount={totalAmount}
            isLoading={isLoading}
            onSaveForLater={saveForLater}
            onContinueToInvest={continueToInvest}
          />
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialog.open}
          onOpenChange={(open) => setDeleteDialog({ ...deleteDialog, open })}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Fund</DialogTitle>
              <DialogDescription>
                Are you sure you want to remove {deleteDialog.fundName} from
                your basket? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() =>
                  setDeleteDialog({ ...deleteDialog, open: false })
                }
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleConfirmDelete}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Remove Fund
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
