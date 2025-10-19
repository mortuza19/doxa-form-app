import { useEffect, useRef, type JSX } from 'react';
import { Dialog, DialogContent, Box } from '@mui/material';

// --- Types ---
interface VideoModalProps {
  open: boolean;
  handleClose: () => void;
  videoId: string;
}

// --- Component ---

function VideoModal({ open, handleClose, videoId }: VideoModalProps): JSX.Element {
  const videoPlayerRef = useRef<HTMLIFrameElement>(null);

  // Function to stop the video when the modal closes
  const stopVideo = () => {
    if (videoPlayerRef.current) {
      // Setting the iframe source to empty effectively stops playback and closes the connection
      videoPlayerRef.current.src = ''; 
    }
  };

  // Use useEffect to stop the video when the modal is closed
  useEffect(() => {
    if (!open) {
      // Give a slight delay to ensure the stop command is processed after the dialog closes
      const timer = setTimeout(stopVideo, 300); 
      return () => clearTimeout(timer);
    }
  }, [open]);

  // The YouTube embed URL with autoplay, modestbranding, and no related videos
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogContent sx={{ padding: 0, overflow: 'hidden' }}>
        <Box 
            // 16:9 Aspect Ratio container for the video player
            sx={{ 
                position: 'relative', 
                paddingTop: '56.25%', // 9 / 16 * 100%
                height: 0,
                backgroundColor: '#000'
            }}
        >
          <iframe
            ref={videoPlayerRef}
            title="Doxa Form Demo Video Player"
            width="100%"
            height="100%"
            src={open ? embedSrc : ''} // Only load the video when 'open' is true
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              border: 0,
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;