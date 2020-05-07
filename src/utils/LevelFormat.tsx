import React from 'react';

export default function LevelFormat (questionNumber: string) {
  switch (questionNumber) {
    case "1":
      return (
        <p>$100</p>
      )
    case "2":
      return (
        <p>$200</p>
      )
    case "3":
      return (
        <p>$300</p>
      )
    case "4":
      return (
        <p>$500</p>
      )
    case "5":
      return (
        <p>$1000</p>
      )
    case "6":
      return (
        <p>$2000</p>
      )
    case "7":
      return (
        <p>$4000</p>
      )
    case "8":
      return (
        <p>$8000</p>
      )
    case "9":
      return (
        <p>$16000</p>
      )
    case "10":
      return (
        <p>$32000</p>
      )
    case "11":
      return (
        <p>$64000</p>
      )
    case "12":
      return (
        <p>$125000</p>
      )
    case "13":
      return (
        <p>$250000</p>
      )
    case "14":
      return (
        <p>$500000</p>
      )
    case "15":
      return (
        <p>$1 MILLION</p>
      )
  }
}