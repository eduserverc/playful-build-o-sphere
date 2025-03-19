
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Upload, X, FileText } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const urgencyLevels = ["Low", "Moderate", "High"];

const NotificationDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { toast } = useToast();
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Moderate');
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    if (!description) {
      toast({
        title: "Missing Description",
        description: "Please provide a notification description",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send the notification to users
    toast({
      title: "Notification Sent",
      description: "Your notification has been sent successfully"
    });

    // Reset form
    setDescription('');
    setUrgency('Moderate');
    setFiles([]);
    onOpenChange(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-lg rounded-lg bg-lavender-100">
        <div className="p-6 bg-lavender-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full h-8 w-8 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-purple-700" />
                <span className="font-medium">Urgency level</span>
              </div>
              
              <div className="flex gap-2">
                {urgencyLevels.map((level) => (
                  <Button
                    key={level}
                    variant={urgency === level ? "default" : "outline"}
                    className={urgency === level 
                      ? "bg-purple-700 hover:bg-purple-800" 
                      : "border-purple-300 text-gray-600"
                    }
                    onClick={() => setUrgency(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Attached files</h3>
              <div className="p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                {files.length > 0 ? (
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span>{files.map(f => f.name).join(', ')}</span>
                  </div>
                ) : (
                  <span className="text-gray-500 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    No attachments found
                  </span>
                )}
                <label>
                  <Input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    multiple
                  />
                  <Button 
                    type="button" 
                    className="bg-purple-700 hover:bg-purple-800"
                  >
                    Upload
                  </Button>
                </label>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Description</h3>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter notification details..."
                className="min-h-[120px] bg-white border border-gray-200"
              />
            </div>
            
            <div className="flex justify-center mt-6">
              <Button 
                onClick={handleSubmit} 
                className="bg-purple-700 hover:bg-purple-800 px-8"
              >
                Send Notifications
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialog;
