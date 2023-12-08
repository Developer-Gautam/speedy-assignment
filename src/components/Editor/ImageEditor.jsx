import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Input,
  Select,
} from '@chakra-ui/react';
import { FaDownload, FaArrowLeft, FaTrash } from 'react-icons/fa';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';

const ImageEditor = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(20);
  const [fontColor, setFontColor] = useState('#000000');
  const [theme, setTheme] = useState('default');
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [editor, setEditor] = useState(null);

  const handleImageDrop = (acceptedFiles) => {
    const selectedImage = acceptedFiles[0];
    setImage(selectedImage);
  };

  const handleDownload = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas().toDataURL('image/png');
      const link = document.createElement('a');
      link.href = canvas;
      link.download = 'edited-image.png';
      link.click();
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleDeleteText = () => {
    setText('');
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImage().toDataURL('image/png');
      const context = editor.getImage().getContext('2d');

      // Draw text overlay on the canvas
      context.font = `${fontSize}px Arial`;
      context.fillStyle = fontColor;
      context.fillText(text, position.x, position.y);

      // Log the base64 representation of the edited image with text overlay
      console.log('Base64 representation of the edited image with text overlay:', canvas);
    }
  };

  return (
    <VStack align="center" spacing="4">
      <Heading mb="4">Image Editor</Heading>
      <Box>
        <Dropzone onDrop={handleImageDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <Box
              {...getRootProps()}
              border="2px dashed"
              p="4"
              rounded="lg"
              textAlign="center"
              cursor="pointer"
            >
              <input {...getInputProps()} />
              <Text>Drag & drop an image here or click to select one</Text>
            </Box>
          )}
        </Dropzone>
      </Box>
      {image && (
        <Box>
          <AvatarEditor
            ref={(editor) => setEditor(editor)}
            image={image}
            width={300}
            height={300}
            border={10}
            borderRadius={theme === 'rounded' ? 30 : 0}
            scale={1}
            text={text}
            fontSize={fontSize}
            textColour={fontColor}
            crossOrigin="anonymous"
          />
        </Box>
      )}
      <Box>
        <HStack spacing="2" mb="2">
          <Input
            placeholder="Add Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          >
            <option value={16}>16px</option>
            <option value={20}>20px</option>
            <option value={24}>24px</option>
          </Select>
          <Input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
          <IconButton
            icon={<FaTrash />}
            aria-label="Delete Text"
            onClick={handleDeleteText}
          />
        </HStack>
        <HStack spacing="2" mb="2">
          <Text>Text Position:</Text>
          <Input
            type="number"
            placeholder="X position"
            value={position.x}
            onChange={(e) => setPosition({ ...position, x: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Y position"
            value={position.y}
            onChange={(e) => setPosition({ ...position, y: e.target.value })}
          />
        </HStack>
      </Box>
      <HStack spacing="2">
        <Button colorScheme="teal" onClick={handleSave}>
          Save
        </Button>
        <IconButton
          icon={<FaDownload />}
          aria-label="Download Image"
          onClick={handleDownload}
        />
        <IconButton
          icon={<FaArrowLeft />}
          aria-label="Go Back"
          onClick={handleBack}
        />
      </HStack>
      <Link to="/login">Back to Login</Link>
    </VStack>
  );
};

export default ImageEditor;
