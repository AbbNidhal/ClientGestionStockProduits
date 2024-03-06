import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from 'src/app/services/produit-mock.service';
import { Produit } from 'src/app/shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  constructor(private produitService: ProduitMockService) { }

  ngOnInit() {
    this.produits = this.produitService.getProduits();
  }



}
