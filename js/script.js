/* ============================================================
   LINGUAVIVA — INTERACTIVE SCRIPTS
   ============================================================ */

/* ---------- HERO MODE SWITCHER ---------- */
function switchHeroMode(mode) {
  const tabLibras = document.getElementById('tab-libras');
  const tabOral = document.getElementById('tab-oral');
  const speakerText = document.getElementById('caption-speaker');
  const captionText = document.getElementById('caption-text');

  if (mode === 'libras') {
    tabLibras.classList.add('active-hero-tab', 'bg-surface-card', 'shadow-sm');
    tabLibras.classList.remove('text-text-secondary');

    tabOral.classList.remove('active-hero-tab', 'bg-surface-card', 'shadow-sm');
    tabOral.classList.add('text-text-secondary');

    speakerText.innerText = 'Prof. Mariana Alencar • Especialista em Libras';
    captionText.innerHTML =
      '&ldquo;Sinalização expressiva: parâmetros gramaticais e ponto de articulação.&rdquo;';
  } else {
    tabOral.classList.add('active-hero-tab', 'bg-surface-card', 'shadow-sm');
    tabOral.classList.remove('text-text-secondary');

    tabLibras.classList.remove('active-hero-tab', 'bg-surface-card', 'shadow-sm');
    tabLibras.classList.add('text-text-secondary');

    speakerText.innerText = 'Prof. Julian Ramos • Fonética Internacional';
    captionText.innerHTML =
      '&ldquo;Fluência em debates corporativos e simulações executivas globais.&rdquo;';
  }
}

/* ---------- JOURNEY SWITCHER (Aluno / Professor) ---------- */
function switchJourney(role) {
  const btnAluno = document.getElementById('flow-btn-aluno');
  const btnProf = document.getElementById('flow-btn-prof');

  const s1Title = document.getElementById('step-title-1');
  const s1Desc = document.getElementById('step-desc-1');
  const s2Title = document.getElementById('step-title-2');
  const s2Desc = document.getElementById('step-desc-2');
  const s3Title = document.getElementById('step-title-3');
  const s3Desc = document.getElementById('step-desc-3');
  const s4Title = document.getElementById('step-title-4');
  const s4Desc = document.getElementById('step-desc-4');

  if (role === 'aluno') {
    btnAluno.classList.add('bg-surface-card', 'shadow-sm', 'text-text-primary');
    btnAluno.classList.remove('text-text-secondary');

    btnProf.classList.remove('bg-surface-card', 'shadow-sm', 'text-text-primary');
    btnProf.classList.add('text-text-secondary');

    s1Title.innerText = 'Cadastre-se na Plataforma';
    s1Desc.innerText =
      'Crie sua conta acessível em menos de 1 minuto sem taxa de matrícula ou contratos abusivos.';
    s2Title.innerText = 'Escolha Idioma e Modalidade';
    s2Desc.innerText =
      'Defina Libras, Espanhol ou Inglês e selecione entre EAD, Imersão Integral ou Modelo Híbrido.';
    s3Title.innerText = 'Faça o Diagnóstico Ágil';
    s3Desc.innerText =
      'Avaliação rápida para mapear sua bagagem atual ou iniciar do zero com segurança total.';
    s4Title.innerText = 'Comece a Praticar';
    s4Desc.innerText =
      'Participe de aulas síncronas, grupos de conversação e acompanhe suas conquistas diárias.';
  } else {
    btnProf.classList.add('bg-surface-card', 'shadow-sm', 'text-text-primary');
    btnProf.classList.remove('text-text-secondary');

    btnAluno.classList.remove('bg-surface-card', 'shadow-sm', 'text-text-primary');
    btnAluno.classList.add('text-text-secondary');

    s1Title.innerText = 'Submissão de Perfil';
    s1Desc.innerText =
      'Envie sua formação acadêmica, experiência didática e preferências de idioma e horários.';
    s2Title.innerText = 'Aula Demonstrativa';
    s2Desc.innerText =
      'Apresente uma micro-sessão para nossa coordenação pedagógica bilíngue inclusiva.';
    s3Title.innerText = 'Configuração de Agenda';
    s3Desc.innerText =
      'Escolha as modalidades e a quantidade de turmas que deseja assumir por semana.';
    s4Title.innerText = 'Início e Remuneração';
    s4Desc.innerText =
      'Lecione para alunos motivados com repasse transparente garantido direto em conta.';
  }
}

/* ---------- FAQ ACCORDION ---------- */
function toggleFaq(id) {
  const el = document.getElementById(id);
  const icon = document.getElementById('faq-icon-' + id.split('-')[1]);

  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    el.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

/* ---------- TEST MODAL ---------- */
function openTestModal() {
  document.getElementById('test-modal').classList.remove('hidden');
}

function closeTestModal() {
  document.getElementById('test-modal').classList.add('hidden');
}

function finishTest() {
  closeTestModal();
  alert(
    'Diagnóstico concluído! Recomendamos: Plano Conexão Ativa com início no Módulo Introdutório A1. Entraremos em contato com sua trilha recomendada.'
  );
}

/* ---------- INITIAL STATE ---------- */
document.addEventListener('DOMContentLoaded', () => {
  switchHeroMode('libras');
  switchJourney('aluno');
});