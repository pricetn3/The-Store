/* @ds-bundle: {"format":3,"namespace":"CredentialConnectionsDesignSystem_081ce6","components":[],"sourceHashes":{"ui_kits/credential-connections-app/HomeScreen.jsx":"4d4befe73597","ui_kits/credential-connections-app/OrdersScreen.jsx":"b9036d5e310c","ui_kits/credential-connections-app/OrgScreen.jsx":"ada50617deb0","ui_kits/credential-connections-app/PageHeader.jsx":"40bda248e231","ui_kits/credential-connections-app/Sidebar.jsx":"3751ccbf5367","ui_kits/credential-connections-app/shared.jsx":"33f84f934716"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CredentialConnectionsDesignSystem_081ce6 = window.CredentialConnectionsDesignSystem_081ce6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/credential-connections-app/HomeScreen.jsx
try { (() => {
/* HomeScreen.jsx — Welcome dashboard for an external (client) user */

function HomeScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState("30d");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Welcome, Taylor",
    subtitle: "May 22, 2026",
    avatarInitials: "TP",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "building-2"
    }, "Add organization"), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "user-plus"
    }, "Invite user"), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "primary",
      iconLeft: "plus",
      onClick: () => onNavigate("orders")
    }, "New order"))
  }), /*#__PURE__*/React.createElement(FilterStrip, {
    tabs: [{
      value: "24h",
      label: "24 hours"
    }, {
      value: "7d",
      label: "7 days"
    }, {
      value: "30d",
      label: "30 days"
    }, {
      value: "12m",
      label: "12 months"
    }, {
      value: "all",
      label: "Custom"
    }],
    activeTab: tab,
    onTab: setTab,
    right: /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "calendar"
    }, "May 1 \u2013 May 22, 2026")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 48px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Orders placed",
    value: "24",
    delta: +8.6,
    note: "vs last 30 days"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Diplomas printed",
    value: "1,486",
    delta: +12.4,
    note: "vs last 30 days"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Holds open",
    value: "4",
    delta: -10,
    negativeIsGood: true,
    note: "resolved 6 this week"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Products",
    supporting: "1 active"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ProductRow, {
    active: true,
    icon: "file-text",
    title: "Diplomas & Certificates",
    sub: "Print and digital \xB7 1,486 issued"
  }), /*#__PURE__*/React.createElement(ProductRow, {
    icon: "award",
    title: "Micro-credentials",
    sub: "Not enabled \xB7 contact sales",
    disabled: true
  }), /*#__PURE__*/React.createElement(ProductRow, {
    icon: "badge-check",
    title: "Verification API",
    sub: "Not enabled \xB7 contact sales",
    disabled: true
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Quick actions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    icon: "plus",
    label: "Place a new order",
    onClick: () => onNavigate("orders")
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "file-search-2",
    label: "Search a student credential"
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "refresh-ccw",
    label: "Reorder a previous batch"
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "user-plus",
    label: "Invite a user to the org"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 14px/20px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Profile completion"), /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "link-color",
    onClick: () => onNavigate("org"),
    iconRight: "arrow-right"
  }, "View")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 75
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)",
      marginTop: 8
    }
  }, "3 of 4 sections complete")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TaskRow, {
    done: true,
    label: "Shipping"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    label: "Billing",
    pending: true
  }), /*#__PURE__*/React.createElement(TaskRow, {
    done: true,
    label: "Contacts"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    done: true,
    label: "Punctuation data"
  }))))));
}

/* ---------- subcomponents ---------- */

function MetricCard({
  label,
  value,
  delta,
  note,
  negativeIsGood
}) {
  const up = delta >= 0;
  const goodUp = !negativeIsGood;
  const positive = up && goodUp || !up && !goodUp;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: label,
    supporting: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 30px/38px var(--font-body)",
      color: "var(--gray-900)",
      letterSpacing: "-0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      font: "var(--fw-medium) 12px/18px var(--font-body)",
      color: positive ? "var(--success-700)" : "var(--error-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: up ? "trending-up" : "trending-down",
    size: 12
  }), up ? "+" : "", delta, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 12px/18px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, note)));
}
function ProductRow({
  active,
  disabled,
  icon,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      border: `1px solid ${active ? "var(--blue-200)" : "var(--gray-200)"}`,
      background: active ? "var(--blue-25)" : "#fff",
      borderRadius: 10,
      opacity: disabled ? 0.65 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: active ? "var(--blue-100)" : "var(--gray-100)",
      color: active ? "var(--blue-700)" : "var(--gray-500)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 12px/18px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, sub)), active && /*#__PURE__*/React.createElement(Pill, {
    tone: "success"
  }, "Active"));
}
function QuickAction({
  icon,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "10px 12px",
      background: "#fff",
      border: "1px solid var(--gray-200)",
      borderRadius: 10,
      cursor: "pointer",
      textAlign: "left",
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    color: "var(--gray-400)"
  }));
}
function TaskRow({
  label,
  done,
  pending
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 20px",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9999,
      flexShrink: 0,
      background: done ? "var(--success-500)" : "transparent",
      border: done ? "none" : `1.5px solid ${pending ? "var(--warning-500)" : "var(--gray-300)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, done && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#fff",
    strokeWidth: 3
  }), pending && !done && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: "var(--warning-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, label), pending && /*#__PURE__*/React.createElement(Pill, {
    tone: "warning"
  }, "Action needed"));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credential-connections-app/OrdersScreen.jsx
try { (() => {
/* OrdersScreen.jsx — Filterable orders table */

function OrdersScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const ORDERS = [{
    id: "CC-2026-04-0421",
    org: "Harvard University",
    initials: "HV",
    type: "Diploma · paper",
    qty: 240,
    status: "complete",
    date: "12 May 2026",
    group: "Spring commencement"
  }, {
    id: "CC-2026-04-0398",
    org: "Harvard Law",
    initials: "HL",
    type: "Diploma · paper",
    qty: 186,
    status: "pending",
    date: "11 May 2026",
    group: "JD class of '26",
    tone: "warning"
  }, {
    id: "CC-2026-04-0376",
    org: "Harvard University",
    initials: "HV",
    type: "Digital",
    qty: 1,
    status: "hold",
    date: "10 May 2026",
    group: "Digital reissue"
  }, {
    id: "CC-2026-04-0312",
    org: "Harvard University",
    initials: "HV",
    type: "Diploma · paper",
    qty: 98,
    status: "processing",
    date: "9 May 2026",
    group: "Medical school"
  }, {
    id: "CC-2026-04-0287",
    org: "Harvard Law",
    initials: "HL",
    type: "Diploma · paper",
    qty: 12,
    status: "complete",
    date: "8 May 2026",
    group: "Reissue batch"
  }, {
    id: "CC-2026-04-0254",
    org: "Harvard University",
    initials: "HV",
    type: "Digital",
    qty: 64,
    status: "complete",
    date: "7 May 2026",
    group: "Continuing Ed"
  }, {
    id: "CC-2026-04-0212",
    org: "Harvard University",
    initials: "HV",
    type: "Diploma · paper",
    qty: 320,
    status: "cancelled",
    date: "5 May 2026",
    group: "Cancelled — duplicate"
  }];
  const STATUS_MAP = {
    complete: {
      tone: "success",
      label: "Complete"
    },
    pending: {
      tone: "warning",
      label: "Pending"
    },
    hold: {
      tone: "error",
      label: "On hold"
    },
    processing: {
      tone: "blue",
      label: "Processing"
    },
    cancelled: {
      tone: "gray",
      label: "Cancelled"
    }
  };
  const counts = ORDERS.reduce((a, o) => (a[o.status] = (a[o.status] || 0) + 1, a), {});
  const tabs = [{
    value: "all",
    label: "All orders",
    count: ORDERS.length
  }, {
    value: "processing",
    label: "Processing",
    count: counts.processing || 0
  }, {
    value: "pending",
    label: "Pending",
    count: counts.pending || 0
  }, {
    value: "hold",
    label: "On hold",
    count: counts.hold || 0
  }, {
    value: "complete",
    label: "Complete",
    count: counts.complete || 0
  }];
  const filtered = ORDERS.filter(o => (tab === "all" || o.status === tab) && (query === "" || o.id.toLowerCase().includes(query.toLowerCase()) || o.org.toLowerCase().includes(query.toLowerCase()) || o.group.toLowerCase().includes(query.toLowerCase())));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Orders",
    subtitle: "Manage open, pending, and completed credential orders",
    avatarInitials: "TP",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "upload"
    }, "Import CSV"), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "primary",
      iconLeft: "plus"
    }, "New order"))
  }), /*#__PURE__*/React.createElement(FilterStrip, {
    tabs: tabs,
    activeTab: tab,
    onTab: setTab,
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 280
      }
    }, /*#__PURE__*/React.createElement(Input, {
      value: query,
      onChange: e => setQuery(e.target.value),
      placeholder: "Search by ID, org, or batch\u2026",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16,
        color: "var(--gray-500)"
      })
    })), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "filter"
    }, "Filters"), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "download"
    }, "Export"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 48px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-50)"
    }
  }, /*#__PURE__*/React.createElement(Th, {
    style: {
      width: "30%"
    }
  }, "Order"), /*#__PURE__*/React.createElement(Th, null, "Organization"), /*#__PURE__*/React.createElement(Th, null, "Type"), /*#__PURE__*/React.createElement(Th, {
    style: {
      textAlign: "right"
    }
  }, "Quantity"), /*#__PURE__*/React.createElement(Th, null, "Status"), /*#__PURE__*/React.createElement(Th, null, "Placed"), /*#__PURE__*/React.createElement(Th, {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((o, i) => {
    const st = STATUS_MAP[o.status];
    return /*#__PURE__*/React.createElement("tr", {
      key: o.id,
      style: {
        borderTop: i === 0 ? "none" : "1px solid var(--gray-200)"
      }
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: 32,
      initials: o.initials,
      tone: o.tone || "blue"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--fw-medium) 14px/20px var(--font-body)",
        color: "var(--gray-900)"
      }
    }, o.id), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--fw-regular) 12px/18px var(--font-body)",
        color: "var(--gray-500)"
      }
    }, o.group)))), /*#__PURE__*/React.createElement(Td, null, o.org), /*#__PURE__*/React.createElement(Td, null, o.type), /*#__PURE__*/React.createElement(Td, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, o.qty), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Pill, {
      tone: st.tone
    }, st.label)), /*#__PURE__*/React.createElement(Td, {
      style: {
        color: "var(--gray-600)"
      }
    }, o.date), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical",
      size: 18,
      color: "var(--gray-500)",
      style: {
        cursor: "pointer"
      }
    })));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      padding: 48,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 32,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-700)",
      marginTop: 12
    }
  }, "No orders match this filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 12px/18px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, "Try clearing the search or switching tabs."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      borderTop: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, "Page 1 of 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "secondary",
    size: "sm",
    iconLeft: "arrow-left"
  }, "Previous"), /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "secondary",
    size: "sm",
    iconRight: "arrow-right"
  }, "Next"))))));
}
function Th({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "12px 16px",
      font: "var(--fw-medium) 12px/18px var(--font-body)",
      color: "var(--gray-600)",
      borderBottom: "1px solid var(--gray-200)",
      ...style
    }
  }, children);
}
function Td({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px",
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-700)",
      verticalAlign: "middle",
      ...style
    }
  }, children);
}
window.OrdersScreen = OrdersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/OrdersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credential-connections-app/OrgScreen.jsx
try { (() => {
/* OrgScreen.jsx — Organization profile: 4 sections to complete */

function OrgScreen({
  onNavigate
}) {
  const [openSection, setOpen] = React.useState("billing");
  const sections = [{
    id: "shipping",
    title: "Shipping",
    sub: "Where printed credentials are delivered.",
    done: true,
    summary: ["University Hall, 1350 Massachusetts Ave", "Cambridge, MA 02138, United States", "Attn: Office of the Registrar"]
  }, {
    id: "billing",
    title: "Billing",
    sub: "Payment method and tax IDs used for invoicing.",
    done: false,
    pending: true
  }, {
    id: "contacts",
    title: "Contacts",
    sub: "People we notify about hold escalations and approvals.",
    done: true,
    summary: ["Taylor Park · Registrar (primary)", "Olivia Rhye · Diploma manager", "+ 2 more"]
  }, {
    id: "punctuation",
    title: "Punctuation data",
    sub: "How student names are punctuated on credentials.",
    done: true,
    summary: ["LaTeX-style accents enabled · José, Müller", "Hyphenated surnames preserved", "Sample reviewed 18 Apr 2026"]
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Harvard University",
    subtitle: "Organization profile \xB7 3 of 4 sections complete",
    avatarInitials: "HV",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "external-link"
    }, "Public profile"), /*#__PURE__*/React.createElement(Btn, {
      hierarchy: "secondary",
      iconLeft: "users"
    }, "Manage users"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 24px"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 16px/24px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Profile completion"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)",
      marginTop: 2
    }
  }, "Complete every section to unlock automatic order release.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 24px/32px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "75%"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 12px/18px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, "3 of 4 complete"))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 75
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 48px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, sections.map(s => /*#__PURE__*/React.createElement(SectionRow, {
    key: s.id,
    section: s,
    open: openSection === s.id,
    onToggle: () => setOpen(openSection === s.id ? null : s.id)
  }))));
}
function SectionRow({
  section,
  open,
  onToggle
}) {
  const s = section;
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 20px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 9999,
      flexShrink: 0,
      background: s.done ? "var(--success-500)" : "transparent",
      border: s.done ? "none" : `2px solid ${s.pending ? "var(--warning-500)" : "var(--gray-300)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, s.done && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "#fff",
    strokeWidth: 3
  }), s.pending && !s.done && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 9999,
      background: "var(--warning-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 16px/24px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, s.title), s.done && /*#__PURE__*/React.createElement(Pill, {
    tone: "success"
  }, "Complete"), s.pending && /*#__PURE__*/React.createElement(Pill, {
    tone: "warning"
  }, "Action needed")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)",
      marginTop: 2
    }
  }, s.sub)), /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "link-color",
    iconRight: open ? "chevron-up" : "chevron-down"
  }, open ? "Collapse" : s.pending ? "Complete now" : "View")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--gray-200)",
      padding: "20px 20px 20px 62px"
    }
  }, s.done && s.summary && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, s.summary.map(line => /*#__PURE__*/React.createElement("li", {
    key: line,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dot",
    size: 14,
    color: "var(--gray-400)"
  }), line))), s.pending && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Billing email",
    placeholder: "finance@registrar.harvard.edu",
    value: "finance@registrar.harvard.edu"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tax ID (EIN)",
    placeholder: "04-2103580",
    value: "04-2103580"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Billing address line 1",
    placeholder: ""
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Billing address line 2",
    placeholder: ""
  }), /*#__PURE__*/React.createElement(Input, {
    label: "City",
    placeholder: "Cambridge"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "ZIP / Postal code",
    placeholder: "02138",
    error: true,
    hint: "ZIP is required to release orders."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 2",
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "secondary"
  }, "Save as draft"), /*#__PURE__*/React.createElement(Btn, {
    hierarchy: "primary",
    iconLeft: "check"
  }, "Mark section complete")))));
}
window.OrgScreen = OrgScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/OrgScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credential-connections-app/PageHeader.jsx
try { (() => {
/* PageHeader.jsx — top section of every screen: avatar + welcome + actions */

function PageHeader({
  title,
  subtitle,
  avatarInitials = "TP",
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "32px 32px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 48,
    initials: avatarInitials,
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 24px/32px var(--font-body)",
      color: "var(--gray-900)",
      letterSpacing: "-0.01em"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)",
      marginTop: 2
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, actions));
}
function FilterStrip({
  tabs,
  activeTab,
  onTab,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "0 32px 24px"
    }
  }, tabs && /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    active: activeTab,
    onChange: onTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, right));
}
window.PageHeader = PageHeader;
window.FilterStrip = FilterStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/PageHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credential-connections-app/Sidebar.jsx
try { (() => {
/* Sidebar.jsx — 270px fixed left nav for the CC app */

function Sidebar({
  active,
  onNavigate,
  orgName = "Harvard University",
  orgInitials = "HV"
}) {
  const main = [{
    id: "home",
    label: "Home",
    icon: "layout-dashboard"
  }, {
    id: "orders",
    label: "Orders",
    icon: "file-text",
    badge: 4
  }, {
    id: "users",
    label: "Users",
    icon: "users"
  }, {
    id: "reports",
    label: "Reports",
    icon: "bar-chart-3"
  }];
  const product = [{
    id: "p-orders",
    label: "Orders",
    icon: "shopping-bag",
    parent: "Diplomas & Certificates"
  }, {
    id: "sigs",
    label: "Signatures",
    icon: "feather"
  }, {
    id: "docs",
    label: "Documents",
    icon: "file-check-2"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 270,
      height: "100vh",
      background: "var(--bg-brand-subtle)",
      borderRight: "1px solid var(--gray-200)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 12px",
      flexShrink: 0,
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 12px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cc-wordmark.svg",
    alt: "Credential Connections",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: "none",
      background: "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--gray-500)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-left-close",
    size: 18
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, main.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    active: active === item.id,
    onClick: () => onNavigate(item.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      border: "1px solid var(--gray-200)",
      borderRadius: 10,
      padding: 6,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 8px",
      cursor: "pointer",
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 28,
    initials: orgInitials
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) 13px/18px var(--font-body)",
      color: "var(--gray-900)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, orgName), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 11px/14px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, "Organization")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14,
    color: "var(--gray-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 4px",
      font: "var(--fw-medium) 12px/16px var(--font-body)",
      color: "var(--gray-500)",
      letterSpacing: "0.02em"
    }
  }, "Diplomas & Certificates"), product.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    active: active === item.id,
    onClick: () => onNavigate(item.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 12px 0",
      borderTop: "1px solid var(--gray-200)",
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "life-buoy",
    size: 16,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("a", {
    style: {
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-600)",
      textDecoration: "none"
    }
  }, "Support"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Pill, {
    tone: "success",
    dot: true
  }, "Online")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 11px/14px var(--font-body)",
      color: "var(--gray-500)"
    }
  }, "Powered by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cc-navy)",
      fontWeight: 600
    }
  }, "Paradigm"))));
}
function NavItem({
  item,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      background: active ? "#fff" : "transparent",
      border: "none",
      borderRadius: 6,
      color: active ? "var(--gray-900)" : "var(--gray-700)",
      font: `var(--fw-${active ? "semibold" : "medium"}) 14px/20px var(--font-body)`,
      cursor: "pointer",
      textAlign: "left",
      boxShadow: active ? "var(--shadow-xs)" : "none",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18,
    color: active ? "var(--blue-700)" : "var(--gray-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge != null && /*#__PURE__*/React.createElement(Badge, {
    tone: active ? "blue" : "gray",
    style: {
      padding: "0 6px",
      borderRadius: 9999
    }
  }, item.badge));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credential-connections-app/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   shared.jsx — Cosmetic primitives for the CC app UI kit
   Exposes all components on window so other JSX scripts can use them.
   ============================================================ */

const {
  useState
} = React;

/* -------------------------- Icon ---------------------------- */
/* Lucide proxy. <Icon name="file-text" size={20} /> */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.6,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    ref: el => {
      if (el && window.lucide) {
        // Ensure each icon gets re-rendered when mounted
        window.lucide.createIcons({
          icons: window.lucide.icons,
          attrs: {},
          nameAttr: "data-lucide"
        });
      }
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      strokeWidth,
      ...style
    }
  });
}

/* -------------------------- Btn ----------------------------- */
function Btn({
  children,
  hierarchy = "primary",
  // primary | secondary | tertiary | destructive | link-color | link-gray
  size = "md",
  // sm | md | lg
  iconLeft,
  iconRight,
  onClick,
  disabled,
  style = {}
}) {
  const sizes = {
    sm: {
      padding: "8px 12px",
      font: "var(--fw-medium) 14px/20px var(--font-body)"
    },
    md: {
      padding: "10px 14px",
      font: "var(--fw-medium) 14px/20px var(--font-body)"
    },
    lg: {
      padding: "10px 16px",
      font: "var(--fw-medium) 16px/24px var(--font-body)"
    }
  };
  const palettes = {
    primary: {
      background: "var(--blue-600)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-button-primary)"
    },
    secondary: {
      background: "#fff",
      color: "var(--gray-700)",
      border: "1px solid var(--gray-300)",
      boxShadow: "var(--shadow-button-secondary)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--gray-600)",
      border: "none"
    },
    destructive: {
      background: "var(--error-500)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-button-primary)"
    },
    "link-color": {
      background: "transparent",
      color: "var(--blue-800)",
      border: "none",
      padding: 0,
      height: 20
    },
    "link-gray": {
      background: "transparent",
      color: "var(--gray-600)",
      border: "none",
      padding: 0,
      height: 20
    }
  };
  const isLink = hierarchy.startsWith("link");
  const palette = palettes[hierarchy];
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...sizes[size],
      ...palette,
      ...(isLink ? {
        padding: 0,
        height: 20,
        borderRadius: 0
      } : {}),
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(Icon, {
    name: iconLeft,
    size: size === "lg" ? 20 : 16
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === "lg" ? 20 : 16
  }));
}

/* -------------------------- Pill ---------------------------- */
function Pill({
  tone = "blue",
  dot = true,
  children,
  style = {}
}) {
  const tones = {
    blue: {
      bg: "var(--blue-25)",
      fg: "var(--blue-800)",
      bd: "var(--blue-200)",
      dotC: "var(--blue-500)"
    },
    success: {
      bg: "var(--success-50)",
      fg: "var(--success-700)",
      bd: "var(--success-200)",
      dotC: "var(--success-500)"
    },
    warning: {
      bg: "var(--warning-50)",
      fg: "var(--warning-700)",
      bd: "var(--warning-200)",
      dotC: "var(--warning-500)"
    },
    error: {
      bg: "var(--error-50)",
      fg: "var(--error-700)",
      bd: "var(--error-200)",
      dotC: "var(--error-500)"
    },
    gray: {
      bg: "var(--gray-100)",
      fg: "var(--gray-700)",
      bd: "var(--gray-200)",
      dotC: "var(--gray-400)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 10px",
      borderRadius: 9999,
      font: "var(--fw-medium) 12px/18px var(--font-body)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: t.dotC
    }
  }), children);
}

/* -------------------------- Badge --------------------------- */
function Badge({
  tone = "blue",
  children,
  style = {}
}) {
  const tones = {
    blue: {
      bg: "var(--blue-25)",
      fg: "var(--blue-800)",
      bd: "var(--blue-200)"
    },
    success: {
      bg: "var(--success-50)",
      fg: "var(--success-700)",
      bd: "var(--success-200)"
    },
    warning: {
      bg: "var(--warning-50)",
      fg: "var(--warning-700)",
      bd: "var(--warning-200)"
    },
    error: {
      bg: "var(--error-50)",
      fg: "var(--error-700)",
      bd: "var(--error-200)"
    },
    gray: {
      bg: "var(--gray-100)",
      fg: "var(--gray-700)",
      bd: "var(--gray-200)"
    },
    modern: {
      bg: "#fff",
      fg: "var(--gray-700)",
      bd: "var(--gray-300)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 8px",
      borderRadius: 6,
      font: "var(--fw-medium) 12px/18px var(--font-body)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      ...(tone === "modern" ? {
        boxShadow: "var(--shadow-xs)"
      } : {}),
      ...style
    }
  }, children);
}

/* -------------------------- Avatar -------------------------- */
function Avatar({
  size = 40,
  src,
  initials,
  tone = "blue",
  style = {}
}) {
  const tones = {
    blue: {
      bg: "var(--blue-100)",
      fg: "var(--blue-800)"
    },
    success: {
      bg: "var(--success-50)",
      fg: "var(--success-700)"
    },
    warning: {
      bg: "var(--warning-50)",
      fg: "var(--warning-700)"
    },
    gray: {
      bg: "var(--gray-100)",
      fg: "var(--gray-700)"
    },
    navy: {
      bg: "var(--cc-navy)",
      fg: "#fff"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      background: t.bg,
      color: t.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `var(--fw-semibold) ${Math.max(10, Math.round(size * 0.36))}px/${size}px var(--font-body)`,
      border: "1px solid rgba(10,13,18,0.06)",
      overflow: "hidden",
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}

/* -------------------------- Card ---------------------------- */
function Card({
  children,
  padding = 20,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "#fff",
      border: "1px solid var(--gray-200)",
      borderRadius: 12,
      boxShadow: "var(--shadow-xs)",
      padding,
      ...style
    }
  }, rest), children);
}
function CardHeader({
  title,
  action,
  supporting
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "0 0 12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 14px/20px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, title), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: "var(--gray-500)",
      marginTop: 2
    }
  }, supporting)), action);
}

/* -------------------------- Input --------------------------- */
function Input({
  label,
  value,
  onChange,
  placeholder,
  leading,
  trailing,
  hint,
  error,
  disabled,
  type = "text"
}) {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? "var(--error-500)" : focus ? "var(--blue-600)" : "var(--gray-300)";
  const ring = error ? "0 0 0 4px rgba(240,68,56,0.20)" : focus ? "var(--ring-focus)" : "none";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      flex: 1
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cc-label",
    style: {
      font: "var(--fw-medium) 14px/20px var(--font-body)",
      color: "var(--gray-700)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 12px",
      background: disabled ? "var(--gray-50)" : "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      boxShadow: `var(--shadow-xs)${ring !== "none" ? `, ${ring}` : ""}`,
      transition: "150ms ease"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-500)",
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      paddingRight: 8,
      borderRight: "1px solid var(--gray-200)"
    }
  }, leading), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value ?? "",
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--fw-regular) 14px/20px var(--font-body)",
      color: disabled ? "var(--gray-500)" : "var(--gray-900)"
    }
  }), trailing), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 12px/18px var(--font-body)",
      color: error ? "var(--error-700)" : "var(--gray-500)"
    }
  }, hint));
}

/* -------------------------- Toggle -------------------------- */
function Toggle({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange?.(!on),
    style: {
      width: 36,
      height: 20,
      borderRadius: 9999,
      background: on ? "var(--blue-600)" : "var(--gray-200)",
      position: "relative",
      cursor: "pointer",
      transition: "150ms ease",
      display: "inline-block",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: on ? 18 : 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "150ms ease"
    }
  }));
}

/* -------------------------- Tabs ---------------------------- */
function Tabs({
  items,
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--gray-300)",
      borderRadius: 8,
      boxShadow: "var(--shadow-xs)",
      overflow: "hidden",
      ...style
    }
  }, items.map((item, i) => {
    const sel = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => onChange?.(item.value),
      style: {
        padding: "8px 14px",
        background: sel ? "var(--gray-50)" : "#fff",
        color: sel ? "var(--gray-800)" : "var(--gray-600)",
        border: "none",
        borderRight: i < items.length - 1 ? "1px solid var(--gray-300)" : "none",
        font: "var(--fw-medium) 14px/20px var(--font-body)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, item.label, item.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        background: sel ? "var(--blue-25)" : "var(--gray-100)",
        color: sel ? "var(--blue-800)" : "var(--gray-700)",
        border: `1px solid ${sel ? "var(--blue-200)" : "var(--gray-200)"}`,
        borderRadius: 6,
        padding: "0 6px",
        font: "var(--fw-medium) 12px/18px var(--font-body)"
      }
    }, item.count));
  }));
}

/* -------------------------- ProgressBar --------------------- */
function ProgressBar({
  value = 0,
  tone = "blue"
}) {
  const colors = {
    blue: "var(--blue-600)",
    success: "var(--success-500)",
    warning: "var(--warning-500)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--gray-100)",
      borderRadius: 9999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${value}%`,
      height: "100%",
      background: colors[tone],
      borderRadius: 9999,
      transition: "240ms ease"
    }
  }));
}

/* Expose globals for use across the kit's <script type="text/babel"> files */
Object.assign(window, {
  Icon,
  Btn,
  Pill,
  Badge,
  Avatar,
  Card,
  CardHeader,
  Input,
  Toggle,
  Tabs,
  ProgressBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credential-connections-app/shared.jsx", error: String((e && e.message) || e) }); }

})();
