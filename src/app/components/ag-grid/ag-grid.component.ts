import { Component } from '@angular/core';
import { Boleta } from '../boleta.model';
import { BoletaService } from '../boleta.service';



@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})

export class AgGridComponent {
  public gridColumnApi;
  public paginationPageSize = 10;

  // public myIcons;
  rowData: Boleta[]


  columnDefs = [
    { headerName: 'status', field: 'status' },
    { headerName: 'conta', field: 'conta' },
    { headerName: 'cliente', field: 'cliente', width: 200 },
    { headerName: 'boleta', field: 'boleta', filter: false, width: 120 },
    { headerName: 'hora', field: 'hora', filter: false, width: 120 },
    { headerName: 'cred/deb', field: 'creddeb', filter: false, width: 120 },
    { headerName: 'ativo', field: 'ativo', width: 350 },
    { headerName: 'valor', field: "valor", width: 120,
                  cellStyle: params => params.value < 0 ? { color: 'red' } : null,
                  valueFormatter: params => parseFloat(params.value).toFixed(8)},
    { headerName: 'criado por', field: 'criado' },
    { headerName: 'atuação de', field: 'atuacao' },
    {
      headerName: '',
      field: '',
      pinned: 'right',
      filter: false,
      sortable: false,
      width: 72,
      floatingFilter: false,
      resizable: false,
      columnGroupShow: 'open',
      cellRenderer: function () {
        return '<span><a [routerLink]="#"><i style="text-align:center;margin-top:8px;color: #2ac5ff ;cursor: pointer" class="material-icons">colorizeoutiline</i></a></span>'
      }

    },
    // pagination=true

  ];

// this.agGrid.api.addEventListener('filterChanged', (event) => {​​​​​​​
//  @ViewChild('agGrid') agGrid: AgGridNg2;

  defaultColDef = {
    sortable: true, //sort
    resizable: true, //pipe entre as colunas
    width: 150, // padrão colunas
    floatingFilter: true, // uma nova coluna para filtros
    filter: true,
    lockPosition: true,//block nas colunas
    suppressMenu: true,//icone de menu não aparece

  }

  constructor(private boletaService: BoletaService) {

  }
  ngOnInit(): void {
    this.boletaService.read().subscribe(boleta => {
      this.rowData = boleta
      console.log(boleta)
    })
  }

}

